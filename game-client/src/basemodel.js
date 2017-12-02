export default class baseModel {
	constructor(scene, id, options, parent_model) {

		if(!id) {
			id = options.name;
		}

        if(typeof options.name == "undefined") {
            options.name = id;
        }

        this.clock = new THREE.Clock();
        this.anim_clock = new THREE.Clock();
		this.scene = scene;
		this.id = id;
		this.name = id;
		this.options = options;
		this.submodels = [];
        this.is_submodel = false;
        this.parent_model = null;
        this.started = false;
        this.group = new THREE.Group();
        this.target = false;
        this.scale = 1;
        this.is_placed = false;
        this.has_init = false;
        this.texture = false;
        this.mouse = scene.mouse;
		//
        this.animation_multiplier = 1;
        this.playing_animation = false;
        this.apply_physics = false;
        this.added_to_scene = false;
        this.raycaster = new THREE.Raycaster();


        if(typeof parent_model != "undefined") {
            this.setParentModel(parent_model);
        }

        this.position = new THREE.Vector3();
        this.offset = new THREE.Vector3();
		this.velocity = new THREE.Vector3();
		this.rotation = 0;

        if (typeof options.scale !== "undefined") {
            this.scale = options.scale;
        }

        if (typeof options.position !== "undefined") {

            if (typeof options.position.x !== "undefined") {
                this.position.x = options.position.x;
            }

            if (typeof options.position.y !== "undefined") {
                this.position.y = options.position.y;
            }

            if (typeof options.position.z !== "undefined") {
                this.position.z = options.position.z;
            }

        }

        if (typeof options.offset !== "undefined") {

            if (typeof options.offset.x !== "undefined") {
                this.offset.x = options.offset.x / this.scale;
            }

            if (typeof options.offset.y !== "undefined") {
                this.offset.y = options.offset.y / this.scale;
            }

            if (typeof options.offset.z !== "undefined") {
                this.offset.z = options.offset.z / this.scale;
            }

        }

        //this.original_position = this.position.clone();
        this.original_position = new THREE.Vector3(0, 0, 0);
        this.ray = new THREE.Raycaster();
        this.ray_origin = new THREE.Vector3(0, 0, 0);
        this.ray_dest = new THREE.Vector3(0, 0, 0);
        this.line = new THREE.Line3( this.ray_origin, this.ray_dest  );

		var model = this;
        this.scene.models.add(this);

        mcec.log("Model created with id " + id);

        if(typeof this.mouse_move == "function") {
            mcec.bindMove((e) => { this.handleMouseMove(e) });
        }
	}

	makeTextSprite( message, parameters ) {
        if ( parameters === undefined ) parameters = {};

        var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
        var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
        var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };
        var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        var metrics = context.measureText( message );
        var textWidth = metrics.width;

        context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

        context.lineWidth = borderThickness;
        //roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.4 + borderThickness, 8);

        context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
        context.fillText( message, borderThickness, fontsize + borderThickness);

        var texture = new THREE.Texture(canvas)
        texture.needsUpdate = true;

        var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } );
        var sprite = new THREE.Sprite( spriteMaterial );

        //sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);

        return sprite;
    }

	handleMouseMove(e) {
        if(this.has_init == false) return;
        this.mouse_move(e);
	}

	getScene() {
	    return this.scene.scene;
    }

	add(mesh) {
	    mcec.log("Adding mesh to group: " + this.name);
	    this.group.add(mesh);
    }

    isModelSet () {
        return !(typeof this.model == "undefined");
    }

    isMeshLoaded () {
        return !(typeof this.model == "undefined");
    }

    getModel() {
	    return this.model;
    }

    addSubmodel(submodel, name) {
	    this.submodels.push(new submodel(this.scene, name, this));

	    return this;
    }

    setParentModel(parent) {
	    this.is_submodel = true;
	    this.parent_model = parent;

	    return this;
    }

    setTargetFromVector(vector) {
        this.target = vector;
    }

    setTargetFromCoords(x, y, z) {
        this.target = new THREE.Vector3(x, y, z);

        if(this.set_target instanceof Function) this.set_target(this.target);
    }

    setTarget(x, z) {
	    var y = this.scene.world.getY(x, z);
	    this.target = new THREE.Vector3(x, y, z);

        this.setTargetFromCoords(x, y, z);
    }

    hasTarget() {
	    if(this.target) {
	        return this.target;
        }
    }

    getPosition() {
	    //return this.model.position;
        return this.position;
    }

    loadedMesh(mesh) {
	    mesh.name = this.name;
        this.model = mesh;
        this.model.position.copy(this.position);
        this.add(this.model);

        this.updatePosition();

        mcec.log("Mesh loaded for " + this.name);

        if(this.is_submodel) {
            this.group.visible = false;
        }

        this.animations = this.getAnimations();

        if(this.animations > 0) {
            this.model.animations = this.animations;
            mcec.log("Detected that " + this.name + " has " + this.animations.length + " animations embedded");
        }

        //var box = new THREE.Box3().setFromObject( mesh );
        var box = new THREE.Box3().setFromObject(mesh);

        // maybe use this later
        //this.box_size = box.getSize();
        //this.box_size = ;

        //console.log("Detected box size for " + this.name + " - " , this.box_size.y);
	}

    getAnimations() {
        var animations = [];

	    try {
	        var a = this.model.geometry.animations;
	        if(a.length) {
	            animations = a;
            }
        } catch(e) {}

        return animations;
	}

	getAnimation(name) {
        var clip = THREE.AnimationClip.findByName(this.getAnimations(), name);
        return clip;
    }

	playAnimation(name, play_at_normal_speed = false) {
	    if(this.playing_animation == name) {
	        mcec.log("Skipping playAnimation, because sequence is already playing");
	        return this.action;
        }

        var clip = this.getAnimation(name);
        var object = this.model;

        this.mixer = new THREE.AnimationMixer(object);
        this.action = this.mixer.clipAction(clip);
        this.playing_animation = name;

        if(!play_at_normal_speed) this.mixer.timeScale = this.animation_multiplier;

        return this.action.play();
    }

    addToScene() {
	    if(this.is_submodel) {
	        // this.group.visible = false;
	        this.parent_model.group.add(this.group);
        } else {
            this.scene.add(this.getModel());

	        this.updatePosition();
        }
    }

    handleInit() {
	    if(this.has_init) return;

        if(this.init instanceof Function) {
            this.init();
        }
        this.has_init = true;
        this.handleUpdate();
    }

    handleUpdate(delta) {
        this.updatePosition();
        if(this.has_init && this.update instanceof Function) this.update(delta);

        if(typeof this.mixer !== "undefined") {
            this.mixer.update(delta);
        }
    }

    handleClick(intersection, e) {
        var x = intersection.point.x;
        var y = intersection.point.y;
        var z = intersection.point.z;

        if(this.has_init && this.click instanceof Function) this.click(x, y, z, intersection, e);
    }

    handlePhysics() {
	    return;// DISABLED
        var hit = this.getIntersects();

        if(( hit )) {
            //var height = hits[0].distance;
            //console.log(hit);
            this.position.y -= hit;
        }
    }

    handlePhysics_unused() {
        var myplayer = this.scene.getMyPlayer();
        var scene = this;

        var timeStep = 1;
        var timeLeft = timeStep + 1;
        var birdsEye = 50;
        var kneeDeep = 3;
        var raycaster = new THREE.Raycaster();
        raycaster.ray.direction.set(0, -1, 0);
        var angles = new THREE.Vector2();
        var displacement = new THREE.Vector3();
        var platform = this.model;//scene.get().getObjectByName("platform", true);
        var dt = 5;
        timeLeft += dt;
        var time = 0.3, damping = 0.93, gravity = 0.01, tau = 2 * Math.PI;

        raycaster.ray.origin.copy(myplayer.position);
        raycaster.ray.origin.y += birdsEye;

        var hits = raycaster.intersectObject(platform);

        // are we above, or at most knee deep in, the platform?
        if ((hits.length > 0) && (hits[0].face.normal.y > 0)) {
            var actualHeight = hits[0].distance - birdsEye;
            // collision: stick to the surface if landing on it
            if ((myplayer.velocity.y <= 0) && (Math.abs(actualHeight) < kneeDeep)) {
                myplayer.position.y -= actualHeight;
                myplayer.velocity.y = 0;
                myplayer.airborne = false;
            }
        }


        //angles.copy(myplayer.spinning).multiplyScalar(time);
        //if (!myplayer.airborne) myplayer.spinning.multiplyScalar(damping);

        myplayer.rotation.add(angles);
        myplayer.position.add(displacement);

        // limit the tilt at ±0.4 radians
        myplayer.rotation.x = Math.max(-0.4, Math.min(+0.4, myplayer.rotation.x));

        // wrap horizontal rotation to 0...2π
        myplayer.rotation.y += tau;
        myplayer.rotation.y %= tau;

        //
        // var x = myplayer.motion.position.x;
        // var y = myplayer.motion.position.y;
        // var z = myplayer.motion.position.z;
        //
        // x = parseInt(x);
        // y = parseInt(y);
        // z = parseInt(z);
        //
        // console.log(x, y, z);
    }

    getMesh() {
	    if(!this.isMeshLoaded()) return false;
	    return this.model;
    }

    updatePosition() {
	    if(this.isMeshLoaded()) {
	        this.position.copy(this.getModel().position);
        }

        if(this.isMeshLoaded() && this.update_model instanceof Function) this.update_model();

        // no need for submodels to proceed past this
        if(this.is_submodel) return;

        //this.group.position.copy(this.position);

        if((this.position.x !== this.original_position.x || this.position.z !== this.original_position.z) && this.scene.world.isMeshLoaded()) {
            if(this.move instanceof Function) this.move();
            this.original_position = this.position.clone();
        }
    }

    getIntersects(recurse) {

	    //this.model.geometry.computeBoundingBox();

	    var height = this.model.geometry.boundingBox.max.y;
	    var raycaster = this.raycaster;
        raycaster.ray.origin.copy(this.position);
        raycaster.ray.direction.set( 0, -1, 0 );
        raycaster.ray.origin.y = this.position.y + height + 5;

        var hits = raycaster.intersectObject( this.scene.world.model, false );

        if( ( hits.length > 0 ) ) {
            for(var i=0; i<hits.length; i++) {
                if(hits[i].object.name == this.scene.world.model.name) return hits[i].distance - (height + 10);
            }
        }

        this.raycaster = raycaster;

        return false;
    }

    placeOnGround() {
        var y = this.scene.world.getY(this.position.x, this.position.z);

        if(y) {
            this.getModel().position.y = y;
            //mcec.log("Ground found @ " + y);
        } else {
            mcec.log("Cant find the ground");
        }

        this.is_placed = true;
    }

    placeMarkerFromVec(vec) {
	    this.placeMarker(vec.x, vec.y, vec.z);
    }

    placeMarker(x, y, z) {

        if(!z) {
            z = y;
            y = this.scene.world.getY(x, z);
        }

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( {color: 0x00ffff} );
        var cube = new THREE.Mesh( geometry, material );

        cube.position.set(x, y, z);

        this.scene.add(cube);
    }

    placePlane(x, y, z, width, height, alt) {

	    console.log("Making plane");

        var geometry = new THREE.PlaneBufferGeometry( width, height, 32);

        if(alt == true) {
            var material = new THREE.MeshBasicMaterial({color: 0x0000cc, side: THREE.DoubleSide, transparent: true, opacity: 0.5});
            var plane = new THREE.Mesh( geometry, material );
        } else {
            var material = new THREE.MeshBasicMaterial({color: 0xFFF300, side: THREE.DoubleSide, transparent: true, opacity: 0.3});
            var plane = new THREE.Mesh( geometry, material );
        }


        plane.lookAt(new THREE.Vector3(0, 1, 0));

        plane.position.set(x, y, z);

        this.scene.add(plane);
    }

    addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {
        // flat shape with texture
        // note: default UVs generated by ShapeBufferGeometry are simply the x- and y-coordinates of the vertices
        var group = new THREE.Group();
        // var geometry = new THREE.ShapeBufferGeometry( shape );
        // var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { side: THREE.DoubleSide} ) );
        // mesh.position.set( x, y, z - 175 );
        // mesh.rotation.set( rx, ry, rz );
        // mesh.scale.set( s, s, s );
        // group.add( mesh );

        // flat shape
        var geometry = new THREE.ShapeBufferGeometry( shape );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color, side: THREE.DoubleSide } ) );
        mesh.position.set( x, y, z - 125 );
        mesh.rotation.set( rx, ry, rz );
        mesh.scale.set( s, s, s );
        group.add( mesh );

        return mesh;

        // extruded shape
        // var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        // var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color } ) );
        // mesh.position.set( x, y, z - 75 );
        // mesh.rotation.set( rx, ry, rz );
        // mesh.scale.set( s, s, s );
        // group.add( mesh );

        //this.addLineShape( shape, color, x, y, z, rx, ry, rz, s );

        return group;
    }

//     var roundedRectShape = new THREE.Shape();
// ( function roundedRect( ctx, x, y, width, height, radius ) {
//         ctx.moveTo( x, y + radius );
//         ctx.lineTo( x, y + height - radius );
//         ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
//         ctx.lineTo( x + width - radius, y + height );
//         ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
//         ctx.lineTo( x + width, y + radius );
//         ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
//         ctx.lineTo( x + radius, y );
//         ctx.quadraticCurveTo( x, y, x, y + radius );
//     } )( roundedRectShape, 0, 0, 50, 50, 20 );

    // function for drawing rounded rectangles
    roundRect(ctx, x, y, w, h, r) {
        //ctx.beginPath();
        ctx.moveTo(x+r, y);
        ctx.lineTo(x+w-r, y);
        ctx.quadraticCurveTo(x+w, y, x+w, y+r);
        ctx.lineTo(x+w, y+h-r);
        ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        ctx.lineTo(x+r, y+h);
        ctx.quadraticCurveTo(x, y+h, x, y+h-r);
        ctx.lineTo(x, y+r);
        ctx.quadraticCurveTo(x, y, x+r, y);
        //ctx.closePath();
        //ctx.fill();
        //ctx.stroke();
    }

    lookToward(x, z) {
	    // get real dest height, but set it to current height to not alter player angle
        //var y = this.scene.world.getY(x, z);

        //var bbox = new THREE.Box3().setFromObject(this.group);
        //var height = bbox.max.y - bbox.min.y;
        var dest = new THREE.Vector3(x, this.position.y, z);
        var sim = new THREE.Object3D();

        var mult_z = 5;

        // copy player location and roation
        sim.position.copy(this.getModel().position);
        sim.rotation.copy(this.getModel().rotation);

        // make sim look toward dest
        sim.translateZ(-mult_z);
        sim.lookAt(dest);

        // convert sim rotation to degrees, then apply to our player
        var rotation = this.get360Rotation(sim);
        this.set360Rotation(rotation);
        //this.scene.camera.setChaseRotation(rotation);

        // set destination height correctly
        //dest.y = y;

        // todo: ask server to walk me there ?
        // todo: make player rotate when server sends confirmation

        //return dest;
    }

    getVectorFromFront(dist, mesh) {
        var mesh2 = new THREE.Object3D();

        if(!mesh) mesh = this.getModel();

        mesh2.position.copy(mesh.position);
        mesh2.rotation.copy(mesh.rotation);

        mesh2.translateZ(dist);

        return mesh2.position.clone();
    }

    hideSubmodel(name) {
        var model = this.group.getObjectByName(name);

        model.visible = false;
    }

    showSubmodel(name) {
        var model = this.group.getObjectByName(name);

        model.visible = true;
    }

    get360Rotation(mesh) {
	    if(!mesh) mesh = this.getModel();

        var euler = new THREE.Euler();
        euler.order = "YXZ";
        euler.setFromQuaternion(mesh.quaternion);

        var rotation = (euler.y * THREE.Math.RAD2DEG) + 180;

	    return rotation;
    }

    set360Rotation(degrees) {
        var euler = new THREE.Euler();
        euler.order = "YXZ";
        euler.setFromQuaternion(this.getModel().quaternion);
        euler.y = ((degrees - 180)/THREE.Math.RAD2DEG);

        this.getModel().setRotationFromEuler(euler);
        this.rotation = degrees;

        return this.rotation;
    }

    getPointInBetweenByLen(pointA, pointB, length) {
        var dir = pointB.clone().sub(pointA).normalize().multiplyScalar(length);
        return pointA.clone().add(dir);
    }

    getPointInBetweenByPerc(pointA, pointB, percentage) {
        var dir = pointB.clone().sub(pointA);
        var len = dir.length();
        dir = dir.normalize().multiplyScalar(len*percentage);
        return pointA.clone().add(dir);
    }

    distanceBetween( v1, v2 ) {

        var dx = v1.x - v2.x;
        var dy = v1.y - v2.y;
        var dz = v1.z - v2.z;

        return Math.sqrt( dx * dx + dy * dy + dz * dz );
    }

    XZdistanceBetween( v1, v2 ) {
        var dx = v1.x - v2.x;
        var dz = v1.z - v2.z;

        return Math.sqrt( dx * dx + dz * dz );
    }

    distanceFrom( vec ) {
        return this.XZdistanceBetween(this.position, vec);
    }

    // called when the physics engine wants to move something
    physicsSetPosition(x, y, z) {

	    if(x) {
            if (typeof this.scale !== "undefined") {
                //y -= (this.scale * this.size.y);
            }

            y -= 5;

            this.physics_vector = new THREE.Vector3(x, y, z);

            this.getModel().position.set(x, y, z);
            this.position.set(x, y, z);
        } else {
	        //this.getModel().position.set(this.position.clone());
        }

    }
}
