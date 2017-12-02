import baseModel from '../src/basemodel';
import terrain from '../src/terrain';
import webview from '../src/webview';
//var terrain = require('../src/terrain');
var shaders = require('../src/shaders');
var io = require('../src/sockets');

class world extends baseModel {

    constructor(scene, id) {

        var options = {
            name: 'platform'
        };

        super(scene, 'platform', options);

        // shit that ammojs will keep track of as an object in the world with gravity and shit
        this.dynamic_objects = [];

        //this.transform_aux = new Ammo.btTransform();
        this.mouse = new THREE.Vector2();

        // init shaders
        this.shaders = new shaders(scene);

        // lets do this
        this.terrain = new terrain(scene, this);
    }

    createObjectMaterial() {
        var c = Math.floor( Math.random() * ( 1 << 24 ) );
        return new THREE.MeshPhongMaterial( { color: c } );
    }

    init() {
        mcec.log("Set world model");

        // so clicks work
        this.setClickMesh();

        // so water works
        //this.scene.setWater();

        // init physics
        // this.initPhysics();





        //this.spawnBall(0,300,0);

        //
        // // instantiate a loader
        // var loader = new THREE.ImageLoader();
        // var me = this;
        //
        // function getHeightData(img) {
        //     var canvas = document.createElement('canvas');
        //     canvas.width = 2048 / 8;
        //     canvas.height = 2048 / 8;
        //     var context = canvas.getContext('2d');
        //
        //     var size = 2048 / 8 * 2048 / 8,
        //         data = new Float32Array(size);
        //
        //     context.drawImage(img, 0, 0);
        //
        //     for (var i = 0; i < size; i++) {
        //         data[i] = 0
        //     }
        //
        //     var imgd = context.getImageData(0, 0, 2048 / 8, 2048 / 8);
        //     var pix = imgd.data;
        //
        //     var j = 0;
        //     for (var i = 0, n = pix.length; i < n; i += (4)) {
        //         var all = pix[i] + pix[i + 1] + pix[i + 2];
        //         data[j++] = all / 40;
        //     }
        //
        //     return data;
        // }
        //
        // // load a image resource
        // loader.load(
        //     // resource URL
        //     'shared/planet.jpg',
        //     // Function when resource is loaded
        //     function ( image ) {
        //         var data = getHeightData(image);
        //
        //         console.log(data);
        //
        //         var terrainG = new THREE.PlaneBufferGeometry(700, 700, 100 - 1, 100 - 1);
        //         terrainG.rotateX(-Math.PI / 2);
        //
        //         var vertices = terrainG.attributes.position.array;
        //
        //         for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
        //             vertices[j + 1] = data[i] * 5;
        //         }
        //
        //         terrainG.computeFaceNormals();
        //         terrainG.computeVertexNormals();
        //
        //         var material = new THREE.MeshLambertMaterial({
        //             //side: THREE.DoubleSide,
        //             color: 0xffffff,
        //             transparent: false,
        //         });
        //
        //         var terrain = new THREE.Mesh(terrainG, material);
        //         terrain.receiveShadow = true;
        //         terrain.castShadow = true;
        //         terrain.position.y = 0;
        //         me.add(terrain);
        //
        //         // var xS = 63, yS = 63;
        //         // var terrainScene = THREE.Terrain({
        //         //     easing: THREE.Terrain.Linear,
        //         //     frequency: 2.5,
        //         //     heightmap: canvas,
        //         //     material: new THREE.MeshBasicMaterial({color: 0x5566aa}),
        //         //     maxHeight: 20,
        //         //     minHeight: -100,
        //         //     steps: 1,
        //         //     useBufferGeometry: false,
        //         //     xSegments: xS,
        //         //     xSize: 1024,
        //         //     ySegments: yS,
        //         //     ySize: 1024,
        //         // });
        //         //
        //         // me.add(terrainScene);
        //     }
        // );
        //






    }

    spawnBall(vec) {
        var threeObject = null;
        var shape = null;
        var objectSize = 13;
        var margin = 0.05;

        var radius = 1 + Math.random() * objectSize;
        var threeObject = new THREE.Mesh( new THREE.SphereGeometry( radius, 20, 20 ), this.createObjectMaterial() );
        var shape = new Ammo.btSphereShape( radius );
        shape.setMargin( margin );

        threeObject.position.copy(vec);

        var mass = objectSize * 50;
        var localInertia = new Ammo.btVector3( 0, 0, 0 );
        shape.calculateLocalInertia( mass, localInertia );

        var transform = new Ammo.btTransform();
        transform.setIdentity();
        var pos = threeObject.position;
        transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );

        var motionState = new Ammo.btDefaultMotionState( transform );
        var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
        var body = new Ammo.btRigidBody( rbInfo );

        threeObject.userData.physicsBody = body;

        this.scene.add( threeObject );
        this.dynamic_objects.push( threeObject );
        this.physics_world.addRigidBody( body );
    }

    // this will be called to load a mesh when a filename isnt specified in the constructor
    // scene wont render until the callback is called with the mesh
    load(callback) {
        var self = this;

        // texture used to generate "bumpiness"
        var bumpTexture = new THREE.ImageUtils.loadTexture( 'shared/world.png' );
        bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;

        var oceanTexture = new THREE.ImageUtils.loadTexture( 'textures/dirt-512.jpg' );
        oceanTexture.wrapS = oceanTexture.wrapT = THREE.RepeatWrapping;

        var sandyTexture = new THREE.ImageUtils.loadTexture( 'textures/sand-512.jpg' );
        sandyTexture.wrapS = sandyTexture.wrapT = THREE.RepeatWrapping;

        var grassTexture = new THREE.ImageUtils.loadTexture( 'textures/grass-512.jpg' );
        grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;

        var rockyTexture = new THREE.ImageUtils.loadTexture( 'textures/rock-512.jpg' );
        rockyTexture.wrapS = rockyTexture.wrapT = THREE.RepeatWrapping;

        var snowyTexture = new THREE.ImageUtils.loadTexture( 'textures/snow-512.jpg' );
        snowyTexture.wrapS = snowyTexture.wrapT = THREE.RepeatWrapping;

        console.log(this.scene.fog);

        // use "this." to create global object
        this.shaders.setUniforms('terrain', {
            bumpTexture:	{ type: "t", value: bumpTexture },
            bumpScale:	    { type: "f", value: 1 },
            oceanTexture:	{ type: "t", value: oceanTexture },
            sandyTexture:	{ type: "t", value: sandyTexture },
            grassTexture:	{ type: "t", value: grassTexture },
            rockyTexture:	{ type: "t", value: rockyTexture },
            snowyTexture:	{ type: "t", value: snowyTexture },
            fogColor:    { type: "c", value: this.scene.fog.color },
            fogNear:     { type: "f", value: this.scene.fog.near },
            fogFar:      { type: "f", value: this.scene.fog.far }
        });

        // create custom material from the shader code above
        //   that is within specially labelled script tags
        this.terrainMaterial = this.shaders.getShaderMaterial('terrain');
        this.terrainMaterial.needsUpdate = true;



        var size = (this.terrain_width * this.terrain_height) * 4;
        var geometry = new THREE.PlaneBufferGeometry( this.height, this.width, this.terrain_height-1, this.terrain_width-1 );
        //geometry.dynamic = true;
        // geometry.verticesNeedUpdate = true;
        // geometry.elementsNeedUpdate = true;
        // geometry.morphTargetsNeedUpdate = true;
        // geometry.uvsNeedUpdate = true;
        // geometry.normalsNeedUpdate = true;
        // geometry.colorsNeedUpdate = true;
        // geometry.tangentsNeedUpdate = true;
        //
        // geometry.computeFaceNormals();
        // geometry.computeVertexNormals();
        //
        // geometry.computeBoundingBox();
        // geometry.computeBoundingSphere();
        geometry.rotateX( - Math.PI / 2 );

        //var plane = new THREE.Mesh(	geometry, customMaterial );

        //plane.rotation.x = -Math.PI / 2;
        //plane.position.y = this.bump_scale / 2;

        //for GETY()
        // var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
        // this.heightMap = new THREE.WebGLRenderTarget( this.terrain_width, this.terrain_height, pars);
        //
        // this.tmpData = new Float32Array(size);
        // this.bump_texture = bumpTexture;
        //
        //
        // plane.updateMatrix();
        //
        // water
        // var waterGeo = new THREE.PlaneGeometry( self.height, self.width, 1, 1 );
        // var waterTex = new THREE.ImageUtils.loadTexture( 'textures/water-512.jpg' );
        //
        // waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
        // waterTex.repeat.set(5,5);
        //
        // var waterMat = new THREE.MeshBasicMaterial( {map: waterTex, transparent:true, opacity:0.40} );
        // self.water2 = new THREE.Mesh(	waterGeo, waterMat );
        //
        // self.water2.rotation.x = -Math.PI / 2;
        // self.water2.position.y = 30;
        //
        // this.scene.add(self.water2);
        //
        // var new_mesh = plane.clone();
        //
        // return new_mesh;

        this.terrain.load(callback);


        // this.getHeightDataFromImage(bumpTexture.image, function(data) {
        //
        //     self.heightmap = data;
        //
        //
        //     //console.log("HEIGHT MAP:", self.heightmap);
        //
        //     var min = 0, max = 0;
        //
        //     for(var i=0; i<self.heightmap.length; i++) {
        //
        //         var val = self.heightmap[i];
        //
        //         if(min == 0) min = val;
        //         if(val > max) max = val;
        //         if(val < min) min = val;
        //
        //     }
        //
        //     console.log("MIN:", min);
        //     console.log("MAX:", max);
        //
        //     self.heightmap = self.BoxFilterHeightMap(self.terrain_width, self.terrain_height, self.heightmap, true, 5);
        //
        //     var mesh = self.heightDataToMesh(self.heightmap);
        //
        //     callback(mesh);
        //
        //     //console.log("WORLD PHYSICS");
        //
        //     //mesh.scale.set(1000,1000,1000);
        //     //mesh.position.y = -5;
        //
        // });

    }

    getHeightAt(x, z, apply_modifier) {

        x = parseInt(x);
        z = parseInt(z);

        // height = 5
        // width = 5
        //
        var i = ((z) * this.canvas.height) + x;
        //
        // x = 3
        // y = 2
        //
        // result = 13
        //
        //     - - - - -
        //         - - - - -
        //             - - - x -
        //     - - - - -
        //         - - - - -

        var height = this.pixel_heights[ i ];

        console.log("HEIGHT IS:", + height);

        return height;
    }

    imageToMesh(image) {
        // -------------------------------------
        // Image
        var depth = 1000;
        var width = 1000;
        var spacingX = 1;
        var spacingZ = 1;
        var heightOffset = 100;
        var canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        var ctx = canvas.getContext('2d');
        var img = new Image();
        var me = this;
        //img.src = image; // The image will not load in codepen.io, and that's why you don't see the mesh.

        /*img.onload = function () {

            // Vertices
            ctx.drawImage(img, 512, 512);
            var pixel = ctx.getImageData(0, 0, width, depth);
            var geom = new THREE.Geometry();
            var output = [];
            for (var x = 0; x < depth; x++) {
                for (var z = 0; z < width; z++) {
                    var yValue = pixel.data[z * 4 + (depth * x * 4)] / heightOffset;
                    var vertex = new THREE.Vector3(x * spacingX, yValue, z * spacingZ);
                    geom.vertices.push(vertex);
                }
            }

            // Faces
            for (var p = 0; p < depth - 1; p++) {
                for (var h = 0; h < width - 1; h++) {
                    var a = h + p * width;
                    var b = (h + 1) + (p * width);
                    var c = h + ((p + 1) * width);
                    var d = (h + 1) + ((p + 1) * width);
                    var face1 = new THREE.Face3(a, b, d);
                    var face2 = new THREE.Face3(d, c, a);
                    geom.faces.push(face1);
                    geom.faces.push(face2);
                }
            }

            geom.computeVertexNormals(true);
            geom.computeFaceNormals();

            var mesh = new THREE.Mesh(geom, new THREE.MeshLambertMaterial({
                color: 0x98dafc,
                shading: THREE.SmoothShading
            }));

            mesh.position.set(-257, 0, -257);
            mesh.receiveShadow = true;

            me.add(mesh);

        };*/
    }

    addTerrainMesh(geometry, scale, x, y, z, rx, ry, rz, material) {
        mesh = new THREE.Mesh( geometry, material );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.position.z = z;
        mesh.rotation.x = rx;
        mesh.rotation.y = ry;
        mesh.rotation.z = rz;
        mesh.overdraw = true;
        mesh.doubleSided = false;

        mesh.updateMatrix();
        this.add(mesh);

        return mesh;
    }

    click(x, y, z, intersection) {
        //this.placeMarker(x, y, z);
        mcec.log("Terrain click");
        //console.log(intersection, x, y, z);

        // todo: move this to the appropriate socket related location

        io.send('walk_request', {x: x, y: y, z: z}, (can_walk, adjusted_pos) => {

            if(!can_walk) return;

            this.scene.getMyPlayer().walkTo(adjusted_pos.x, adjusted_pos.y, adjusted_pos.z);

            // get the face normal in object space
            var vec = intersection.face.normal.clone();

            // the cone points up
            var up = new THREE.Vector3( 0, 1, 0 );

            if ( vec.y == 1 || vec.y == -1 ) {
                var axis = new THREE.Vector3( 1, 0, 0 ).normalize();
            } else {
                var axis = new THREE.Vector3().crossVectors(up, vec).normalize();
            }

            // determine the amount to rotate
            var radians = Math.acos(up.dot(vec));

            // do shit
            var mat = new THREE.Matrix4();
            mat.makeRotationAxis(axis, radians);

            // set rotation
            this.clickMesh.rotation.copy(new THREE.Euler().setFromRotationMatrix(mat));
            this.clickMesh.position.set(x, y, z);
            this.clickMesh.material.side = THREE.DoubleSide;

            this.clickMesh.material.opacity = this.clickMeshMaxOpacity;
            this.clickMesh.visible = true;
        });
    }

    mouse_move(e) {
        if(e.which != 0)
            return;

        this.scene.mouse.x = e.clientX;
        this.scene.mouse.y = e.clientY;

        // this.scene.gpuPicker.needUpdate = true;
    }

    pickMouse() {
        var mouse3D = new THREE.Vector3( ( this.scene.mouse.x / window.innerWidth ) * 2 - 1, -( this.scene.mouse.y / window.innerHeight ) * 2 + 1, 0.5 );
        var raycaster =  new THREE.Raycaster();

        raycaster.setFromCamera( mouse3D, this.scene.getCamera() );

        var hits = raycaster.intersectObjects( this.scene.hitboxes );

        if(hits.length > 0) {

            var hit = hits[0];
            var parent = hit.object.parent;
            var model = this.scene.models.get(parent);

            if(model) {

                var username = model.user_info.username;

                mcec.log("Mouse over player:", username);

            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    update(delta) {
        //if(this.clickMesh.material.opacity > 0) this.clickMesh.material.opacity -= 0.1;

        if(typeof this.last_pick == "undefined") this.last_pick = 0;
        var time = Date.now();

        if(time - this.last_pick > 100) {
            this.pickMouse();
            this.last_pick = time;
        }


        this.terrain.update(delta);
    }

    getZ (x, z) {

        //this.div = obj.div || [256,256];
        //this.div = obj.div || [512,512];
        //this.size = obj.size || [50, 10, 50];





        this.update();

        var colx = Math.floor((x / this.width + .5) * ( this.terrain_width));
        var colz = Math.floor((-z / this.height + .5) * ( this.terrain_height));


        var pixel = Math.floor(((colz - 1) * this.terrain_width) + colx) * 4;


        var result = (this.tmpData[pixel + 0]
                    + this.tmpData[pixel + 1]
                    + this.tmpData[pixel + 2])
                    * this.ratio;

        return result;
    }

    getY (x, z) {
        //if (!this.isMeshLoaded()) return;

        //return this.getYRaycast(x, z);
        return this.terrain.getY(x, z, this.scene.getMyPlayer().model.position.y);
    }

    getYRaycast (x, z) {
        if (!this.isMeshLoaded()) return;

        // should already be done
        if(typeof  this.model.geometry !== "undefined") {
            this.model.geometry.computeBoundingBox();
            // use the height for the ray so we dont waste time putting it to 1k or some shit
            var height = this.model.geometry.boundingBox.max.y * this.model.scale.y;
        } else {
            var height = this.scene.world.terrain.max_height;
        }
        height = this.terrain.getY(x, z)+0.5;

        console.log("GETY(): HEIGHT: " + height);

        var raycaster = new THREE.Raycaster();
        raycaster.ray.direction.set( 0, -1, 0 );
        raycaster.ray.origin.set(x, height, z);

        // var mouse = new THREE.Vector2(x, z);
        // var intersect = this.gpuPicker.pick(mouse, raycaster);

        //return intersect;

        //

        var hits = raycaster.intersectObject( this.terrain.getSectorFromPosition(x, z).mesh );
        var hits_filtered = [];

        if( ( hits.length > 0 ) ) {
            for(var i=0; i<hits.length; i++) {
                //if(hits[i].object.name == this.name) {
                console.log(hits[i]);
                var offset = height - hits[i].distance;
                console.log(offset);
                //return offset + hits[i].face.normal.y;
                    return (hits[i].point.y);//distance);
                //}
            }

        }

        return false;
    }

    getY2 (x, z) {
        //return this.getHeightAt(x, z, true);
        console.log("GETY: START");
        var max_y = 1500;
        var min_y = -500;
        var chunk = 1000;
        var raycaster = new THREE.Raycaster(new THREE.Vector3(x, max_y, z), new THREE.Vector3(0, -1, 0), 0, chunk);
        var platform = this.scene.world.model; //scene.get().getObjectByName("platform", true);

        var y = max_y;
        while(y >= min_y) {

            //console.log("TESTING: " + y);

            var hits = raycaster.intersectObject(platform, false);
            //if(hits.length > 0) console.log(hits);
            if ((hits.length > 0)) { //&& (hits[0].face.normal.y > 0)
                var result = y + (hits[0].face.normal.y - (hits[0].distance));
                console.log("GETY: " + result);
                return result;
            }

            y -= chunk;

            raycaster.ray.origin.y = y;
        }

        return false;
    }

    getYOld(x, z) {

        var max_y = 2000;
        var min_y = -1000;
        var chunk = 10;

        var y = max_y;
        while(y >= min_y) {

            var origin = new THREE.Vector3(x, y + chunk, z);
            var direction = new THREE.Vector3(x, y - 10, z);

            //origin.normalize();
            //direction.normalize();

            var rc = new THREE.Raycaster(origin, direction);

            try {
                var where = rc.intersectObject(this.model);

                if (where.length > 0) {
                    console.log(where);
                    return where[0].point.y;
                }
            } catch(e) {

            }

            y -= chunk;
        }

        return false;
    }

    clearClickMesh() {
        this.clickMesh.visible = false;
    }

    setClickMesh() {
        // custom png material
        //var texture = this.scene.models.getTexture('click_good');
        //var material = new THREE.MeshPhongMaterial({map: texture, color: 0xFFFFFF, transparent: true, opacity: 0.75});

        // basic yellow material
        var material = new THREE.MeshBasicMaterial({color: 0xFFF300, transparent: true, opacity: 0.3});

        // create mesh
        //var mesh = new THREE.Mesh(new THREE.BoxGeometry(20, 0.2, 20), material);
        var mesh = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 0.3, 20, 0), material);

        this.clickMeshMaxOpacity = material.opacity;

        this.clickMesh = mesh;
        this.clickMesh.name = "click_mesh";
        this.clickMesh.material.opacity = 0;

        var scale = 0.8;

        this.clickMesh.scale.set(scale, scale, scale);
        this.clickMesh.visible = false;

        // add to scene
        this.scene.add(this.clickMesh);
    }

    getMaterial (img) {
        var material = new THREE.MeshBasicMaterial( { map: new THREE.Texture(null, THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping), ambient: 0xaaaaaa, specular: 0xffffff, shininess: 0, shading: THREE.SmoothShading } );

        return material;
    }

    initPhysics() {

        console.log("WORLD PHYSICS");

        this.collision_config = new Ammo.btDefaultCollisionConfiguration();
        this.dispatcher = new Ammo.btCollisionDispatcher( this.collision_config );
        this.broadphase = new Ammo.btDbvtBroadphase();
        this.solver = new Ammo.btSequentialImpulseConstraintSolver();
        this.physics_world = new Ammo.btDiscreteDynamicsWorld( this.dispatcher, this.broadphase, this.solver, this.collision_config );
        this.physics_world.setGravity( new Ammo.btVector3( 0, -9.82, 0 ) );




        // Create the terrain body
        //this.model.scale.set(5,5,5);
        this.shape = this.createTerrainShape( this.heightmap );

        var groundTransform = new Ammo.btTransform();
        groundTransform.setIdentity();

        // Shifts the terrain, since bullet re-centers it on its bounding box.
        groundTransform.setOrigin( new Ammo.btVector3( 0, ((((this.terrain_max_height + this.terrain_min_height)) * this.model.scale.y) / 2), 0 ) );

        var groundMass = 0;
        var groundLocalInertia = new Ammo.btVector3( 0, 0, 0 );
        var groundMotionState = new Ammo.btDefaultMotionState( groundTransform );
        var groundBody = new Ammo.btRigidBody( new Ammo.btRigidBodyConstructionInfo( groundMass, groundMotionState, this.shape, groundLocalInertia ) );
        this.physics_world.addRigidBody( groundBody );
    }



    testGetY(num) {

        if(!num) num = 500;

        console.time('testGetY');

        for (var i = 0; i < num; ++i) {

            var x = mcec.random(-500,500);
            var y = mcec.random(-500,500);

            var junk = this.getY(x,y);
            console.log("COORDS: x: ", x, ", y: ", y);

        }

        console.timeEnd('testGetY');

        console.time('testGPUGetY');

        for (var i = 0; i < num; ++i) {

            var x = mcec.random(0,500);
            var y = mcec.random(0,500);

            var junk = this.terrain.getY(x,y);
            console.log("COORDS: x: ", x, ", y: ", y);

        }

        console.timeEnd('testGPUGetY');

    }

    spawnRobots(num) {
        if(!num) num = 15;
        // add another player for some fun
        mcec.log("TRYING TO ADD NPCS");

        for(var i=0; i<num; i++) {

            var x = mcec.random(1,15);
            var z = mcec.random(1,15);

            x += this.scene.getMyPlayer().position.x;
            z += this.scene.getMyPlayer().position.z;

            this.scene.players.addPlayer("Player #" + (i+1), {npc: true, position: {x: x, z: z, y: 150}});

        }
    }

    spawnWebview(url, w, h, x, y, z) {

        if(!w) w = 500;
        if(!h) h = 500;
        if(!x) x = this.scene.getMyPlayer().position.x;
        if(!y) y = this.scene.getMyPlayer().position.y;
        if(!z) z = this.scene.getMyPlayer().position.z;
        if(!url) url = "/login.html";

        this.webview = new webview(this.scene, url, {
                                            width: w,
                                            height: h,
                                            position: {x: x, y: y, z: z}
                                         });

    }

    updatePhysics(deltaTime) {
        if(typeof this.physics_world !== "undefined") this.physics_world.stepSimulation( deltaTime, 10 );

        // Update objects
        for ( var i = 0, il = this.dynamic_objects.length; i < il; i++ ) {

            var obj = this.dynamic_objects[ i ];

            var body = obj.getModel().userData.physicsBody;
            var ms = body.getMotionState();

            if ( ms ) {
                ms.getWorldTransform( this.transform_aux );

                var p = this.transform_aux.getOrigin();
                var q = this.transform_aux.getRotation();


                obj.physicsSetPosition( p.x(), p.y(), p.z() );
                //obj.quaternion.set( q.x(), q.y(), q.z(), q.w() );
            } else {
                obj.physicsSetPosition();
            }
        }
    }

    addRigidBody( model ) {

        var threeObject = model.getModel();
        var mass = model.options.mass;

        //threeObject.position.copy( pos );
        //threeObject.quaternion.copy( quat );

        var pos = threeObject.position.clone();
        var quat = threeObject.quaternion.clone();

        // make a box with our shit in it to check the size
        var box = new THREE.Box3().setFromObject( threeObject );
        var x = box.size().x;
        var y = box.size().y;
        var z = box.size().z;

        // for later
        model.size = box.size();
        var cc = new Ammo.btKinematicCharacterController();

        var transform = new Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
        transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );

        var motionState = new Ammo.btDefaultMotionState( transform );
        var localInertia = new Ammo.btVector3( 0, 0, 0 );

        var shape = new Ammo.btBoxShape( new Ammo.btVector3( (x * 0.5), (y * 0.5), (z * 0.5) ));
        shape.setMargin( 0.05 );
        shape.calculateLocalInertia( mass, localInertia );

        //shape.setLocalScaling( new Ammo.btVector3( 0.25, 0.25, 0.25 ) );

        var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
        var body = new Ammo.btRigidBody( rbInfo );

        threeObject.userData.physicsBody = body;
        //scene.add( threeObject );

        if ( mass > 0 ) {
            this.dynamic_objects.push( model );
            // Disable deactivation
            body.setActivationState( 4 );
        }

        this.physics_world.addRigidBody( body );
    }



}

module.exports = world;


