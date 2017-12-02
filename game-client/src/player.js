import baseModel from '../src/basemodel';
var io = require('../src/sockets');

class player extends baseModel {

    constructor(scene, id, defaults) {

        var options = {
            filename: 'shared/player.json',
            scale: 10,
            skinning: true,
            // morph_targets: true,
            // morph_normals: true,
            // enhance: true,
            shininess: 0,
            //skinning: true,
            //offset: {y: -145},
            mass: 1
        };

        super(scene, id, Object.assign(options, defaults));


        this.walk_speed = 0.5; // how fast we want the player to walk
        this.walk_segment = 150; // how far to walk before each calculation
        this.animation_multiplier = 1.5; // how fast the animation should play

        this.apply_physics = true;
        this.is_npc = (options.npc == true);
        this.raycaster = new THREE.Raycaster();
        this.walk_attempt = false; // # of retries when walking
        this.is_walking = false;
        // this.addSubmodel(player_weapon, 'weapon');
        // this.addSubmodel(player_head, 'head');

        if(typeof options.id !== "undefined") mcec.log("Player (user id #" + options.id + ") initializing!");
    }

    loadDefaults(user_info) {
        if(typeof user_info == "undefined") return;

        this.user_info = user_info;

        for(var n in user_info) {
            var v = user_info[ n ];

            if(n == "position") {

                this.position.x = v.x;
                this.position.y = v.y;
                this.position.z = v.z;

                if(this.isMeshLoaded()) this.model.position = this.position;

            }

        }

        if(typeof user_info.username !== "undefined") this.makeNameTag(user_info.username);
    }

    makeNameTag(text) {
        //this.name_tag = this.makeTextSprite(text, { fontsize: 12, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
        //this.name_tag = new SpriteText2D(text, { align: textAlign.center,  font: '40px Arial', fillStyle: '#000000' , antialias: false });


        //this.scene.add( this.name_tag );

        var loader = new THREE.FontLoader();
        var font = loader.load('fonts/helvetiker_regular.typeface.json', (font) => {

            var geometry = new THREE.TextGeometry(text,
                {size: 0.1,
                    height: 0.001,
                    curveSegments: 3,
                    font: font,
                    bevelThickness: 0.1,
                    bevelSize: 0.1,
                    bevelEnabled: false
                });

            var name_tag = new THREE.Group();

            // player name 1
            var mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.3, side: THREE.FrontSide } ) );
            mesh.position.z = 0.001;
            name_tag.add(mesh);

            // calc some geom brah
            name_tag.children[0].geometry.computeBoundingBox();
            var size = name_tag.children[0].geometry.boundingBox;
            var width = size.max.x - size.min.x;
            var height = size.max.y - size.min.y;

            // rounded rect
            var w = width + .07;
            var h = height + .035;

            // // player name shadow 1
            // var mesh2 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true, opacity: 0.1, side: THREE.FrontSide } ) );
            // mesh2.position.x += 0.02; // right
            // mesh2.position.y += -0.02; // down
            // mesh2.position.z = 0.025; // behind mesh1
            // name_tag.add(mesh2);

            // player name 2 ( FLIP SIDE )
            var mesh3 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.3, side: THREE.FrontSide } ) );
            mesh3.rotation.y = THREE.Math.degToRad(180);
            mesh3.position.x += width;
            mesh3.position.z = -0.001; // behind
            name_tag.add(mesh3);

            // // player name shadow 2 ( FLIP SIDE )
            // var mesh4 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true, opacity: 0.1, side: THREE.FrontSide } ) );
            // mesh4.rotation.y = THREE.Math.degToRad(180);
            // mesh4.position.x += width; // right
            // mesh4.position.x -= 0.02; // right
            // mesh4.position.y += -0.02; // down
            // mesh4.position.z = -0.025;// behind
            // name_tag.add(mesh4);

            // create rect
            var shape = new THREE.Shape();
            this.roundRect( shape, 0, 0, w, h, 0.02 );

            var geometry = new THREE.ShapeBufferGeometry( shape );
            var label = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true, opacity: 0.3, side: THREE.DoubleSide } ) );
            label.position.z = 0; // center
            label.position.y -= (h - height) * 1.05; // down
            label.position.x -= (w - width) / 2; // left

            name_tag.add(label);

            this.name_tag = name_tag;


            //this.name_tag.scale.set(0.1, 0.1, 0.1);
        });
    }

    update_model() {

        // stick to ground
        //if(this.is_placed && this.is_walking) this.handlePhysics();
    }

    init() {
        this.model.geometry.computeBoundingBox();
        var bbox = new THREE.Box3().setFromObject(this.model);

        this.size = bbox;
        this.height = (bbox.max.y - bbox.min.y);
        this.height_scaled = this.height / this.options.scale;
        this.scene.camera.player_height = this.height;

        mcec.log("Player completely loaded - " + this.name, this.height);

        //this.getModel().position.set(0, 50, 0);
        //this.handlePhysics();
        //this.is_placed = true;

        //this.model.material

        this.playIdleAnimation();

        if(this.isMyPlayer()) {
            this.localPlayerInit();
        }

        if (typeof this.name_tag !== "undefined") {
            this.getModel().add(this.name_tag);
        }

        this.name_tag.children[0].geometry.computeBoundingBox();
        this.name_tag.position.x = -(this.name_tag.children[0].geometry.boundingBox.max.x / 2);
        this.name_tag.position.y = (this.height_scaled) * 1.1;

        //this.initPhysics();

        var material = new THREE.MeshBasicMaterial( {
            color: 0xffffff,
            transparent: true,
            opacity: 0
        } );

        var geometry = new THREE.CylinderBufferGeometry(0.5, 0.05, 3.8, 4, 4);

        var hitbox = new THREE.Mesh(
            geometry,
            material
        );

        //hitbox.position.y += 1;

        hitbox.castShadow = false;
        hitbox.receiveShadow = false;

        hitbox.name = "hitbox";

        this.hitbox = hitbox;
        this.model.add(hitbox);
        this.scene.hitboxes.push(this.hitbox);

        // var scene = this.scene;
        // this.can_update = false;
        // var me = this;
        // var loader = new THREE.JSONLoader();
        // loader.load("shared/player.json", function ( geometry, materials ) {
        //
        //     for ( var i = 0; i < materials.length; i ++ ) {
        //         var m = materials[ i ];
        //         m.skinning = true;
        //         m.morphTargets = true;
        //         // m.specular.setHSL( 0, 0, 0.1 );
        //         // m.color.setHSL( 0.6, 0, 0.6 );
        //         //m.map = map;
        //         //m.envMap = envMap;
        //         //m.bumpMap = bumpMap;
        //         //m.bumpScale = 2;
        //         //m.combine = THREE.MixOperation;
        //         //m.reflectivity = 0.75;
        //     }
        //
        //     var mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
        //
        //     mesh.updateMatrix();
        //     mesh.updateMatrixWorld(true);
        //
        //     mesh.scale.set(25,25,25);
        //
        //     mesh.position.x -= 100;
        //     mesh.position.z += 100;
        //     mesh.position.y = scene.world.getY(mesh.position.x, mesh.position.z);
        //
        //
        //
        //     if (typeof mesh.geometry !== "undefined" && typeof mesh.geometry.vertices !== "undefined") {
        //         mcec.log("Reversing vertices for model " + mesh.name);
        //
        //         var geo = mesh.geometry;
        //         var verts = geo.vertices;
        //
        //         for (let i = 0; i < verts.length; i++) {
        //             //verts[i].setX(verts[i].x * -1);
        //             //verts[i].setY(verts[i].y * -1);
        //         }
        //
        //         geo.verticesNeedUpdate = true;
        //     }
        //
        //
        //     scene.add(mesh);
        //
        //     me.testmesh = mesh;
        //
        //     me.testthemesh(mesh);
        //
        // } );
    }

    initPhysics() {

        // idk
        var mass = 15;
        var mesh = this.getMesh();

        // make a bounding box
        var box = new THREE.Box3().setFromObject( mesh );
        var x = box.size().x;
        var y = box.size().y;
        var z = box.size().z;

        // maybe use this later
        this.box_size = box.size();

        //this.scene.world.addRigidBody(this);

        // do random ammojs shit that i dont get
        // var shape = new Ammo.btBoxShape( new Ammo.btVector3(x, y, z) );
        // shape.setMargin( margin );
        //
        // var localInertia = new Ammo.btVector3( 0, 0, 0 );
        // shape.calculateLocalInertia( mass, localInertia );
        //
        // var transform = new Ammo.btTransform();
        // transform.setIdentity();
        //
        // var pos = mesh.position;
        // transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
        //
        // var motionState = new Ammo.btDefaultMotionState( transform );
        // var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
        // var body = new Ammo.btRigidBody( rbInfo );
        //
        // mesh.userData.physicsBody = body;
        //
        // this.scene.world.dynamic_objects.push( mesh );
        // this.scene.world.physics_world.addRigidBody( body );
    }

    localPlayerInit() {
        // var x = this.position.x;
        // var z = this.position.z;
        // var radius = 30;
        //
        // // dont touch
        // var min_x = x - (radius/2);
        // var min_z = z -(radius/2);
        // var max_x = x + (radius/2);
        // var max_z = z +(radius/2);
        //
        // for(var _x=min_x; _x<max_x; _x++) {
        //     for(var _z=min_z; _z<max_z; _z++) {
        //
        //         var pos = this.scene.world.terrain.GetGridSquarePositionAt(_x, _z);
        //
        //         var y = this.scene.world.terrain.getY(pos.x, pos.z);
        //         var y2 = this.scene.world.terrain.getY(pos.x, pos.z, 1);
        //
        //         console.log("Y and Filtered Y:", y, y2);
        //
        //         this.placePlane(pos.x, y2, pos.z, 5, 5);
        //         //this.placePlane(pos.x, y2, pos.z, 5, 5, true);
        //     }
        // }

        //this.scene.world.terrain.getCurrentSector().addWireframe();

    }

    click(e) {
        mcec.log("player clicked on " + this.user_info.id);
        console.log(this);
    }

    set_target(target) {
        this.startWalking();
    }

    startWalking() {
        //console.time('testWalkTime');

        this.is_walking = true;
        this.walk_step = false;

        this.playAnimation("Walk");
    }

    // updated framely, and should just gradually pull the player down
    applyGravity() {
        if(this.stuck_to_ground == true) return;

        var grav = 1;
        var above = 10;
        var raycaster = new THREE.Raycaster();
        var y = this.position.y;

        //raycaster.ray.direction.set( 0, -1, 0 );
        //raycaster.ray.origin.set(this.position.x, this.position.y + above, this.position.z);

        // var hits = raycaster.intersectObject( this.scene.world.terrain.getSectorFromPosition(this.position.x, this.position.z).mesh );
        // var hits_filtered = [];
        //
        // if( ( hits.length > 0 ) ) {
        //     for(var i=0; i<hits.length; i++) {
        //         y = (hits[i].distance) - above;
        //         break;
        //     }
        // }

        //if(this.walk_step !== "undefined" && this.walk_step !== false) {
        //    var alt = this.scene.world.terrain.getY(this.walk_step.x, this.walk_step.z, 1);
        //} else {
            var alt = this.scene.world.terrain.getY(this.position.x, this.position.z, this.position.y);
        //}

        var diff = this.position.y - alt;

        // move player up
        if(diff < 0) {
            if(y + (grav * 2) > alt) y = alt;
            else y += (grav * 2);
        }

        // move player down
        if(diff > 0) {
            if(y - grav < alt) y = alt;
            else y -= grav;
        }

        if(y == this.model.position.y) {
            this.stuck_to_ground = true;
        }

        //console.log(y, this.scene.world.terrain.getY(this.position.x, this.position.z, 10));

        this.model.position.y = y;
    }

    // im walking, and need to move across the screen
    walkUpdate(attempt) {
        var segment_dist = this.walk_segment;

        // clone target and set to player Y
        var level_target = this.target.clone();
        level_target.y = this.position.y; // so theres no messing with y position of our player

        // are we less than 10% distance to the step?
        if ((this.distanceFrom(this.walk_step) < (segment_dist * 0.1) || !this.walk_step) && !this.walk_step_pending) {

            // calculate a new step step_segment toward the target
            var new_step = this.getPointInBetweenByLen(this.getModel().position.clone(), this.target, segment_dist);

            this.walk_step_pending = true;
            io.send('walk', new_step, (pos) => {
                this.walk_step = new THREE.Vector3(pos.x, pos.y, pos.z);
                this.walk_step_pending = false;

                mcec.log("[IO] Got walk step back!", this.walk_step);
            });

            // place a marker on this next step for debug
            // this.walk_step.y = this.scene.world.getY(this.walk_step.x, this.walk_step.z);
            // this.placeMarker(this.walk_step.x, this.walk_step.y, this.walk_step.z);
        }

        // walk only if we have a step!
        if(this.walk_step !== false) {

            if (this.distanceFrom(this.walk_step) < 1 && this.walk_step_pending) {
                mcec.log("LAG! Waiting on walk step!");
            } else {
                // get a new point for this frame that is just an increment toward the walk_step, so walk_speed
                var pos = this.getPointInBetweenByLen(this.getModel().position.clone(), this.walk_step, this.walk_speed);

                // look toward the target
                this.lookToward(pos.x, pos.z);

                // set my X and Z to the new position, the altitude will be handled by 'gravity'
                this.getModel().position.x = pos.x;
                this.getModel().position.z = pos.z;

                // check if arrived at dest
                if (this.distanceFrom(this.target) < 1 && !this.walk_step_pending) {
                    this.walkComplete();
                }
            }
        }

        /*
        // if(!this.walk_step || distance_to_next < segment_dist * .1 || attempt > 0) {
        //
        //     if(target !== this.walk_step) {
        //
        //         mcec.log("Getting new walk step (" + this.name + "), distance was: " + distance_to_next);
        //
        //         this.walk_step = this.getPointInBetweenByLen(this.getModel().position, target, segment_dist);
        //
        //         //this.walk_step.y = this.getModel().position.y;
        //         //target.y = this.getModel().position.y;
        //
        //         var dist1 = this.distanceFrom(this.walk_step);
        //         var dist2 = this.distanceFrom(target);
        //
        //         // if its going to take longer to take a step, than the whole trip..
        //         if (dist1 > dist2) {
        //             mcec.log("Setting final walk step same as target");
        //             this.walk_step = target.clone();
        //         }
        //
        //         //this.walk_step.y = this.scene.world.getY(this.walk_step.x, this.walk_step.z);
        //
        //         //this.walk_step.y  += player_height + 5;
        //
        //         //this.placeMarker(this.walk_step.x, this.walk_step.y, this.walk_step.z);
        //
        //
        //     }
        // }

        //this.walk_step = this.getPointInBetweenByLen(this.getModel().position, target, segment_dist);
        //new_pos = this.getPointInBetweenByLen(old_pos, target, step_dist);

        // calc distances
        //var dist1 = this.distanceFrom(this.walk_step);
        //var dist2 = this.distanceFrom(target);

        // if(target !== this.walk_step) {
        //     new_pos = this.getPointInBetweenByLen(this.getModel().position, this.walk_step, step_dist);
        // }

        //var hasnt_moved = false;
        
        // make movement
        // if(old_pos.x > this.walk_step.x) {
        //     new_pos.x -= step_dist;
        // }
        // if(old_pos.x < this.walk_step.x) {
        //     new_pos.x += step_dist;
        // }
        //
        // if(old_pos.z > this.walk_step.z) {
        //     new_pos.z -= step_dist;
        // }
        // if(old_pos.z < this.walk_step.z) {
        //     new_pos.z += step_dist;
        // }

        //new_pos = this.getPointInBetweenByLen(old_pos, this.walk_step, step_dist);

        // if(new_pos.y > this.walk_step.y) {
        //     new_pos.y -= step_dist;
        // }
        // if(new_pos.y < this.walk_step.y) {
        //     new_pos.y += step_dist;
        // }

        //new_pos = this.getVectorFromFront(step_dist, {position: n});
        //this.placeMarker(new_pos.x, new_pos.y, new_pos.z);

        //var coords = this.getGridLocation();
        //var target_coords = this.scene.world.terrain.getGridCoordsAt(this.target.x, this.target.z);
        //var arrived = ((coords.x == target_coords.x && coords.y == target_coords.y));

        //if(coords == this.grid_coords) {
        //    hasnt_moved = true;
        //}

        //this.grid_coords = coords;
        */
    }

    getGridLocation() {
        var x = this.position.x;
        var z = this.position.z;

        var coords = this.scene.world.terrain.getGridCoordsAt(x, z);

        return coords;
    }

    walkComplete() {
        this.is_walking = false;
        this.target = false;
        this.walk_attempt = false;
        this.walk_step = false;

        mcec.log("I've finished walking (" + this.name + ")");

        //this.placeOnGround();

        if(this.isMyPlayer()) {
            this.scene.world.clearClickMesh();
        }

        this.playIdleAnimation();


        //console.timeEnd('testWalkTime');
    }

    playIdleAnimation() {
        this.playAnimation("Idle", true);
    }

    // called when the model is moved in any way
    move() {
        //this.placeOnGround();
        //mcec.log("Placed player on ground (" + this.name + ")");

        this.stuck_to_ground = false;

        if(!this.has_init) return;

        //this.name_tag.position.x -= 2;
        //this.name_tag.position.x -= 5;
        //this.name_tag.lookAt(this.scene.getCamera().position);
    }

    isMyPlayer () {
        return (this == this.scene.getMyPlayer());
    }

    isNPC() {
        return this.is_npc;
    }

    freeze() {
        this.model = undefined;
    }

    walkTo(x, y, z) {
        mcec.log("WalkTo(" + x + ", " + z + ")");

        if(!z) {
            z = y;
            this.setTarget(x, z);
        } else {
            //this.lookToward(x, z);
            this.setTargetFromCoords(x, y, z);
        }
    }

    // idk.. remove self from scene?
    unload() {
        mcec.log("Unloading player ", this);

        for(var i=0; i<this.scene.scene.children.length; i++) {
            var obj = this.scene.scene.children[i];

            if(obj == this.model) {
                this.scene.scene.remove(obj);
            }
        }

        for(var i=0; i<this.scene.hitboxes.length; i++) {
            var obj = this.scene.hitboxes[i];

            if(obj == this.hitbox) {
                this.scene.hitboxes.splice(i, 1);
            }
        }

        this.scene.scene.remove(this.name_tag);
    }

    // this is called for every player on every render update,
    // does NOT fire until the model is loaded
    update() {
        //this.model.position.z += 1;

        if(!this.is_placed) {
            this.placeOnGround();
        }

        if(!this.is_walking && this.hasTarget()) {
            mcec.log("Found that I (" + this.name + ") have a target");
            this.startWalking();
        }

        if(this.is_walking) {
            this.walkUpdate();
        } else {

            var rand_x = Math.floor((Math.random() * 500) + 1) - 250;
            var rand_y = Math.floor((Math.random() * 500) + 1) - 250;

            var dist = this.distanceFrom(this.scene.getMyPlayer().position);
            if(this.isNPC() && this.scene.world.has_init && dist > 5 && !this.is_walking) {

                // var pos = this.getPointInBetweenByLen(this.position, this.scene.getMyPlayer().position, dist);

                var pos = this.position;

                mcec.log(this.name + " my position: " + pos.x + ", " + pos.z);

                var x = mcec.random(pos.x + 20, pos.x - 20);
                var z = mcec.random(pos.z + 20, pos.z - 20);

                mcec.log(this.name + " walking to: " + x + ", " + z);

                this.walkTo(x, z);

            }

        }

        this.applyGravity();
    }

}

module.exports = player;