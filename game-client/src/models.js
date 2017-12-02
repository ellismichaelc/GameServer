// import ColladaLoader from "../src/ColladaLoader.js";
var mcec = require('../shared/mcec');

export default class models {
	constructor(scene) {
		this.scene = scene;
        this.queue = [];
        this.queue_textures = [];
        this.models = [];
	    this.textures = [];
	    this.has_init = false;
	    this.queue_started = false;
	}

	add (model) {
	    if(typeof model.filename !== "undefined" && model.filename.indexOf('.png')) {
	        model.loaded = false;
            this.queue_textures.push(model);
            return;
	    }
        this.queue.push(model);
    }

    hide () {
        while(scene.children.length > 0){
            scene.remove(scene.children[0]);
        }
    }

    click(e) {
        if(!this.has_init) {
            mcec.log("Waiting for all models to initialize ..");
            return;
        }

        // var raycaster = new THREE.Raycaster(); // create once
        // var mouse = new THREE.Vector2(); // create once
        //
        // mouse.x = ( e.clientX / mcec.getViewportSize().width ) * 2 - 1;
        // mouse.y = - ( e.clientY / mcec.getViewportSize().height ) * 2 + 1;
        //
        // raycaster.setFromCamera( mouse, this.scene.getCamera() );

        var camera = this.scene.getCamera();

        var vector = new THREE.Vector3();
        var raycaster = new THREE.Raycaster();
        var dir = new THREE.Vector3();

        vector.set( ( e.clientX / window.innerWidth ) * 2 - 1, - ( e.clientY / window.innerHeight ) * 2 + 1, 0.5 ); // z = 0.5 important!
        vector.unproject( camera );
        raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

        var intersects = raycaster.intersectObjects(this.scene.scene.children, true);


        // GPU PICKING
        // this.scene.gpuPicker.needUpdate = true;
        //
        // var raymouse = new THREE.Vector2();
        // raymouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        // raymouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
        //
        // raycaster.setFromCamera( raymouse, this.scene.getCamera() );
        // var intersects = this.scene.gpuPicker.pick(this.scene.mouse, raycaster);


        for( var i = 0; i < intersects.length; i++ ) {
            var intersection = intersects[ i ];
            var mesh = intersection.object;
            var model = this.get(mesh);

            //mcec.log("INTERSECTION", intersection, mesh, model);

            if(model) {
                model.handleClick(intersection, e);
            }

            if(mesh.name == "") continue;

            // console.log(e);
            // mcec.log("Clicked on object " + obj.name);
            // console.log(obj);

            //this.scene.world.placeMarker(intersection.point.x, intersection.point.y+1, intersection.point.z);

            if(mesh.name == "click_mesh") continue;
            if(mesh.name == "skybox") continue;
            if(mesh.type == "LineSegments") continue;



            break;
        }
    }

    // get model by mesh
    get (mesh) {
        for(var i=0; i<this.models.length; i++) {
            var model = this.models[ i ];

            var is_platform = (mesh.name == "platform" && model.name == "platform");

            if(model.model == mesh || is_platform) {
                return model;
            }
        }

        return false;
    }

    getTexture (id) {
        for(var i=0; i<this.textures.length; i++) {
            var texture = this.textures[ i ];

            if(texture.id == id) return texture.texture;
        }

        return false;
    }

    // load all models in queue
    startQueue (callback) {
	    var models = this;
	    models.callback = callback;

        this.queue_started = true;
	    this.processQueue();
    }

    removeFromQueue(model) {

	    var new_q = [];

	    for(var i=0; i<this.queue.length; i++) {
	        if(this.queue[i] !== model) {
	            new_q.push(this.queue[i]);
            }
        }

        this.queue = new_q;
    }

    processQueue() {
        if(!this.queue_started) return;

        var waiting = 0;


        for(var i=0; i<this.queue.length; i++) {
            var model = this.queue[i];

            if(!model.started) {
                model.started = true;
                this.load(model);

                mcec.log("Loading: " + model.id);
            }

            if(model.isMeshLoaded()) {

                this.models.push(model);
                this.removeFromQueue(model);

                //this.queue.splice(i, 1);

                mcec.log("Moving " + model.id + " to scene");

                model.addToScene();
            } else {
                waiting ++;
            }
        }

        if(waiting > 0) {
            mcec.log("Still " + waiting + " items left in queue");
            //this.processQueue();

        } else {

            if(!this.has_init) {

                this.has_init = true;
                mcec.log("Queue is complete, doing callback");

                if(typeof this.callback !== "undefined") this.callback();
            }

        }

        //this.addToScene();

        // for(var i=0; i<this.queue_textures.length; i++) {
        //
        //     var texture = this.queue_textures[i];
        //     models.loadTexture(texture);
        //
        //     mcec.log("Loading: " + texture);
        // }
    }

    addToScene() {
        // for(var i=0; i<this.queue.length; i++) {
        //     var model = this.queue[ i ];
        //
        //
        //
        //
        //     //this.scene.add(model.model);
        // }
        //
        // for(var i=0; i<this.queue_textures.length; i++) {
        //     var texture = this.queue_textures[ i ];
        //
        //     this.textures.push(texture);
        //     this.queue_textures.slice(i, i+1);
        //
        //     //this.scene.add(model.model);
        // }
        //
        // // all done, empty queue
        // this.callback();
        // this.init();
    }

    updateQueue() {

	    if(!this.queue_started) return;

	    var count = 0;
        for(var i=0; i<this.queue.length; i++) {
            var q = this.queue[ i ];

            count ++;

            if(q.isMeshLoaded()) {
                count --;
            }
        }

        // for(var i=0; i<this.queue_textures.length; i++) {
        //     var q = this.queue_textures[ i ];
        //
        //     count ++;
        //
        //     if(q.loaded === true) {
        //         count --;
        //     }
        // }

        if(count > 0) {
            mcec.log("Still " + count + " items left in queue");

            this.processQueue();

        } else {

            if(!this.has_init) {
                mcec.log("Queue is complete, doing callback");

                this.callback();
            }

        }


    }

    queue_count () {
	    return this.queue.length;
    }

    load (model) {
        var models = this;
        var options = model.options;


        if (!options) options = {};
        var processMesh = function(mesh, options) {

            if(!mesh) {
                var mesh = new THREE.Object3D();
            }

            models.applyOptionsToMesh(mesh, options, model);

            model.loadedMesh(mesh);
            models.processQueue();
        };

        if(typeof options.filename == "undefined") {
            mcec.log(options.name + " has no filename, creating empty object3d");

            model.load(
                function(mesh) {
                    processMesh(mesh, options, model);
                }
            );


        } else {
            var url = options.filename + "?r=" + this.scene.clock.getDelta();

            mcec.log("Loading model from url: " + url);

            var JSONLoaderCallback = function (geometry, materials) {

                var hasMaterials = (typeof materials !== "undefined");

                if (hasMaterials) {
                    mcec.log("Model " + options.name + " came with materials");
                    var mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
                } else {
                    mcec.log("Model " + options.name + " did not come with materials");
                    var mesh = new THREE.Mesh(geometry);
                }

                processMesh(mesh, options, model);
            };
            var ObjectLoaderCallback = function (object) {


                if (typeof object.scene !== "undefined") {
                    var mesh = object.scene;
                } else {
                    var mesh = object;
                }

                //var mesh = new THREE.Mesh( object.scene.children[0].geometry, object.scene.children[0].material );

                //console.log(mesh);
                //
                // for(var i=0; i<mesh.children.length; i++) {
                //
                //     var child = mesh.children[ i ];
                //
                //     if(child.type == "Mesh") {
                //         // console.log("CHILD", child);
                //         // child.material.side = THREE.DoubleSide;
                //         // child.material.skinning = true;
                //     }
                // }

                processMesh(mesh, options, model);
            };


            if (url.indexOf('.dae') != -1) {
                var loader = new THREE.ColladaLoader();
                loader.load(url, (obj) => {
                    ObjectLoaderCallback(obj);
                });
            } else if (url.indexOf('.fbx') != -1) {
                var loader = new THREE.FBXLoader();
                loader.load(url, (obj) => {
                    ObjectLoaderCallback(obj);
                });
            } else {
                var loader = new THREE.JSONLoader();
                loader.load(url, (geometry, materials) => {
                    JSONLoaderCallback(geometry, materials);
                });
            }
        }
    }

    applyOptionsToMesh(mesh, options, model) {

        if (!options) var options = {};

	    mcec.log("Applying options to mesh: " + options.name);

        var hasMaterials = (typeof mesh.material !== "undefined");

        if(hasMaterials) {
            var material = mesh.material;
        }

        if(options.enhance === "true") {
            mcec.log("Enabling enhancements");
            //mesh.geometry.dynamic = true;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        }

        if (typeof options.name !== "undefined") {
            mesh.name = options.name;
        }


        //if(model) model.group.scale.set(model.scale, model.scale, model.scale);
        if(typeof options.scale !== "undefined") mesh.scale.set(options.scale, options.scale, options.scale);

        if (options.skinning === true && hasMaterials) {
            mcec.log("Enabling skinning for " + options.name);
            for (var i = 0; i < material.length; i++) {
                var m = material[i];
                m.skinning = true;
            }
        }

        if(hasMaterials && options.morph_targets !== "undefined" && options.morph_targets == true) {
            mcec.log("Enabling morphTargets for " + options.name);
            for (var i = 0; i < material.length; i++) {
                var m = material[i];
                m.morphTargets = true;
            }
        }

        if(hasMaterials && options.morph_normals !== "undefined" && options.morph_normals == true) {
            mcec.log("Enabling morphNormals for " + options.name);
            for (var i = 0; i < material.length; i++) {
                var m = material[i];
                m.morphNormals = true;
            }
        }

        if(hasMaterials && options.shininess !== "undefined") {
            mcec.log("Modifying shininess for " + options.name);
            for (var i = 0; i < material.length; i++) {
                var m = material[i];
                m.shininess = options.shininess;
            }
        }

        if (typeof options.place_on !== "undefined") {

            //var y = models.get('platform').getY(90, 90);

            //console.log(y);

        }

        if(mesh.name == "self") {

        }

        return mesh;

    }

    loadTexture (texture) {
        var models = this;
        var url = texture.filename;
        var name = texture.name;

        var loader = new THREE.TextureLoader();
        loader.load(url, function (tx) {

            texture.id = name;
            texture.texture = tx;
            texture.loaded = true;

            mcec.log("Loaded texture: " + name + " from " + url);

            models.updateQueue();
        });
    }

    update(delta) {

        for(var i in this.models) {
            var model = this.models[ i ];

            if(!model.isMeshLoaded()) continue;

            model.handleInit();
            model.handleUpdate(delta);
        }

        this.processQueue();
    }


    modelsHaveInit() {
        var init = true;

	    for(var model in this.models) {
            if(this.models[ model ].has_init == false) init = false;
        }

        return init;
    }

    init() {
        for(var model in this.models) {
            this.models[ model ].handleInit();
        }
    }
}
module.exports = models;