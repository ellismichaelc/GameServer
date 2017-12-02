var mcec = require('../shared/mcec');
var players = require('../src/players');
var world = require('../src/world');
var renderer = require('../src/renderer');
var camera = require('../src/camera');
var terrain = require('../src/terrain');
var models = require('../src/models');
var io = require('../src/sockets');

import '../js/objects/water';

class scene {
    constructor(game, bypass_init) {
        this.game = game;

        //
        // some of our main shit
        this.enabled = false;
        this.skybox_scale = 10000;
        this.mouse = new THREE.Vector2(0,0);
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.css_scene = new THREE.Scene();
        this.hitboxes = []; // will hold our picking objects

        // renderers and camera
        this.renderer = new renderer(this);
        this.css_renderer = new renderer(this, true);
        this.camera = new camera(this);

        this.doReset();


        if(!bypass_init) {
            // watch controls
            mcec.watchControls(this.getRenderer().domElement);

            this.start(() => {
                game.update();
            });
        }
    }

    add (obj) {
        return this.scene.add(obj);
    }

    addSkybox () {
        var size = this.skybox_scale; //this.world.terrain.sector_size;

        this.getCamera().far = size * 2;

        mcec.log("Initializing skybox with size: " + size);

        var scene = this;
        var skygroup = new THREE.Group();

        //var skyboxCubemap = new THREE.CubeTextureLoader().load(urls);
        var texture = new THREE.TextureLoader().load('shared/skybox.jpg');
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        var material = new THREE.MeshLambertMaterial( {
            color: 0xffffff,
            specular: 0x050505,
            shininess: 0,
            side: THREE.DoubleSide,
            map: texture,
            transparent: true,
            opacity: 1
        } );

        var geometry = new THREE.SphereBufferGeometry(size, 10, 10);
        var skybox = new THREE.Mesh(
            geometry,
            material
        );

        skybox.castShadow = false;
        skybox.receiveShadow = false;

        skybox.name = "skybox";

        this.skybox = skygroup;


        // experimenting with nightbox

        var texture = new THREE.TextureLoader().load('shared/nightbox.jpg');
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        var material = new THREE.MeshLambertMaterial( {
            color: 0xffffff,
            specular: 0x050505,
            shininess: 0,
            side: THREE.DoubleSide,
            map: texture,
            //transparent: true,
            //opacity: 1
        } );
        var geometry = new THREE.SphereBufferGeometry((size) + (size * 0.002), 10, 10);
        var nightbox = new THREE.Mesh(
            geometry,
            material
        );
        nightbox.castShadow = false;
        nightbox.receiveShadow = false;
        this.nightbox = nightbox;


        skygroup.add(nightbox);
        skygroup.add(skybox);

        scene.add(skygroup);
    }

    get () {
        return this.scene;
    }

    getCamera () {
        return this.camera.get();
    }

    getContainer () {
        var container = document.getElementById( 'container' );

        return container;
    }

    getMyPlayer () {
        return this.players.getMyPlayer();
    }

    getRenderer (css_renderer) {
        if(css_renderer) return this.css_renderer.get();
        else return this.renderer.get();
    }

    handleClick(e) {
        //mcec.log("scene click");

        if(!this.getMyPlayer()) return;
        this.models.click(e);
        //e.preventDefault();
    }

    handleResize () {
        mcec.log("Resizing window");

        var viewport = mcec.getViewportSize();

        this.getRenderer().setSize(viewport.width, viewport.height);
        this.getRenderer(true).setSize(viewport.width, viewport.height);
        this.getCamera().aspect = viewport.width / viewport.height;
        this.getCamera().updateProjectionMatrix();

        //if(typeof this.gpuPicker !== "undefined") this.gpuPicker.resizeTexture( viewport.width, viewport.height );
    }

    handleMovement  () {
        var player = this.getMyPlayer();

        var forward = new THREE.Vector3();
        var sideways = new THREE.Vector3();

        //if (!player.motion.airborne) {
            // look around with camera using arrows
            // var multx = 0.05;
            // var multy = 0.08;
            // var sx = this.keysPressed[this.watchedKeys.UP] ? multx : (this.keysPressed[this.watchedKeys.DN] ? -multx : 0);
            // var sy = this.keysPressed[this.watchedKeys.LT] ? multy : (this.keysPressed[this.watchedKeys.RT] ? -multy : 0);
            //
            // if (Math.abs(sx) >= Math.abs(player.motion.spinning.x)) player.motion.spinning.x = sx;
            // if (Math.abs(sy) >= Math.abs(player.motion.spinning.y)) player.motion.spinning.y = sy;
            //
            // // move around physically using WSAD
            // var mult = 0.5;
            // forward.set(Math.sin(player.motion.rotation.y), 0, Math.cos(player.motion.rotation.y));
            // sideways.set(forward.z, 0, -forward.x);
            // forward.multiplyScalar(this.keysPressed[this.watchedKeys.W] ? -mult : (this.keysPressed[this.watchedKeys.S] ? mult : 0));
            // sideways.multiplyScalar(this.keysPressed[this.watchedKeys.A] ? -mult : (this.keysPressed[this.watchedKeys.D] ? mult : 0));
            //
            // var combined = forward.add(sideways);
            // if (Math.abs(combined.x) >= Math.abs(player.motion.velocity.x)) player.motion.velocity.x = combined.x;
            // if (Math.abs(combined.y) >= Math.abs(player.motion.velocity.y)) player.motion.velocity.y = combined.y;
            // if (Math.abs(combined.z) >= Math.abs(player.motion.velocity.z)) player.motion.velocity.z = combined.z;
            //
            // //jump
            // var mult = 0.7;
            // var vy = this.keysPressed[this.watchedKeys.SP] ? mult : 0;
            // player.motion.velocity.y += vy;
        //}

        //console.log("COORDS: " , player.motion.position.x, player.motion.position.y, player.motion.position.z, " ROTATION: ", player.motion.rotation.x, player.motion.rotation.y);
    }

    setLighting () {
        var hemilight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
        //hemilight.color.setHSL(.24, .64, .19 );
        //hemilight.groundColor.setHSL(0.095, 1, 1);
        hemilight.position.set(-500, this.skybox_scale / 3, 0);
        this.hemilight = hemilight;
        this.add(hemilight);

        // var alight = new THREE.AmbientLight(0x00ffe4, 1);
        // this.add(alight);

        var dirlight = new THREE.DirectionalLight(0xffffff, 1);
        dirlight.position.set(0, this.skybox_scale / 3, 0);
        //dirlight.color.setHSL(.74, .64, .59 );
        //dirlight.position.set(-1, 1.75, 1);
        //dirlight.position.multiplyScalar(150);
        dirlight.castShadow = true;
        dirlight.shadowMapWidth = 2048;
        dirlight.shadowMapHeight = 2048;

        var d = 50;

        dirlight.shadowCameraLeft = -d;
        dirlight.shadowCameraRight = d;
        dirlight.shadowCameraTop = d;
        dirlight.shadowCameraBottom = -d;

        dirlight.shadowCameraFar = 3500;
        dirlight.shadowBias = -0.0001;

        this.dirlight = dirlight;
        this.add(dirlight);
    }

    setFog() {
        // set fog i guess
        this.fog = new THREE.FogExp2( 0xd3e0e8, 100 );
    }

    setControls () {
        // var controls = new THREE.TrackballControls(this.getCamera(), this.getRenderer().domElement);
        // controls.noPan = true;
        // controls.rotateSpeed = 8.0;
        // controls.minDistance = 20;
        // controls.maxDistance = 400;
        //
        // this.controls = controls;
    }

    setCamera () {

    }

    start (callback) {
        var scene = this;
        var start = function() {
            scene.init(callback);
        };

        //this.models.add({name: 'click_good', filename: "shared/mouse_click_good.png"});
        //this.models.add({name: 'click_bad', filename: "shared/mouse_click_bad.png"});scene.bindEvents();

        // todo: Enhance!
        // scene.addSkybox();

        scene.init(callback);

    }

    setWater() {
        // Create the water effect
        // this.water = new THREE.Water(
        //     10000,
        //     10000,
        //     {
        //         textureWidth: 512,
        //         textureHeight: 512,
        //         waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
        //             texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        //         }),
        //         //alpha: 	parameters.alpha,
        //         sunDirection: this.dirlight.position.clone().normalize(),
        //         sunColor: 0xffffff,
        //         waterColor: 0x001e0f,
        //         //distortionScale: parameters.distortionScale,
        //         //fog: scene.fog != undefined
        //     }
        // );
        //
        // this.water.rotation.x = - Math.PI / 2;
        // this.water.receiveShadow = true;
        // this.water.scale.set(1000, 1000, 1000);
        // //this.water.position.y += 400;
        // this.add(this.water);

        // this.water = new THREE.Water(
        //     this.getRenderer(),
        //     this.getCamera(),
        //     this.scene,
        //     {
        //         textureWidth: 512,
        //         textureHeight: 512,
        //         waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
        //             texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        //         }),
        //         alpha: 1,
        //         sunDirection: this.dirlight.position.clone().normalize(),
        //         sunColor: 0xffffff,
        //         waterColor: 0x001e0f,
        //         //distortionScale: parameters.distortionScale,
        //         //fog: scene.fog != undefined
        //     }
        // );
        //
        // this.watermesh = new THREE.Mesh(
        //     new THREE.PlaneGeometry(10000, 10000, 1, 1),
        //     this.water.material
        // );
        //
        // //this.watermesh.scale.set(1000, 1000, 1000);
        // this.watermesh.add(this.water);
        // this.watermesh.rotation.x = - Math.PI * 0.5;
        // this.water.position.y -= 330;
        //
        // this.water.add(this.watermesh);
        //
        // this.add(this.water);
        this.water_options = {
            oceanSide: this.skybox_scale * 2,
            size: 512,
            distortionScale: 0,
            alpha: 0.7
        };

        //this.waterNormals;

        var water = new THREE.Water(
            this.water_options.oceanSide,
            this.water_options.oceanSide,
            {
                textureWidth: this.water_options.size,
                textureHeight: this.water_options.size,
                waterNormals: new THREE.TextureLoader().load( 'textures/water-512.jpg', function ( texture ) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                }),
                alpha: 	this.water_options.alpha,
                sunDirection: this.dirlight.position.clone().normalize(),
                sunColor: 0x00aaac,
                waterColor: 0x00fffc,
                distortionScale: this.water_options.distortionScale,
                fog: this.fog || undefined
            }
        );

        water.material.side = THREE.DoubleSide;

        this.water = new THREE.Group();
        this.water.rotation.x = - Math.PI / 2;
        this.water.castShadow = false;
        this.water.receiveShadow = false;
        this.water.position.y = 0;
        this.water.name = "water";

        this.water.add(water);

        this.add( this.water );


        ////////////////////////////////////////
        ////////////////////////////////////////
    }

    init (callback) {
        var scene = this;

        scene.handleResize();

        mcec.log("Initializing scene");

        window.addEventListener('resize', function() { scene.handleResize(); }, false);

        var scene = this;
        var render = function (timeStamp) {

            //var deltaTime = scene.clock.getDelta();
            //scene.update(deltaTime);

            // call our game loop with the time elapsed since last rendering, in ms
            callback();

            var camera = scene.getCamera();

            requestAnimationFrame(render);

            scene.getRenderer(true).render(scene.css_scene, camera);
            scene.getRenderer().render(scene.get(), camera);
            //scene.time += deltaTime;
        };

        this.inject();
        render();
    }

    // reset back to login screen
    doReset() {
        for(var i in this.scene.children) {
            this.scene.remove(this.scene.children[i]);
        }

        this.scene = new THREE.Scene();

        // start adding models
        this.models = new models(this);
        this.world = new world(this);
        this.players = new players(this);
        this.water = false;

        //this.doReset();
        this.setLighting();
        this.setFog();
        this.setWater();


        this.camera.setLoginCamera();

        mcec.log("Scene reset");
    }

    hide() {
        if(!this.is_showing) return;
        this.is_showing = false;

        //this.constructor(this.game);
    }

    show() {
        if(this.is_showing) return;
        this.is_showing = true;

        mcec.log("Scene start bitch");

        this.addSkybox();
        this.models.startQueue();
    }

    setBinds() {
        // io.send('login', {user: user, pass: pass}, (result, user_info, error) => {
        //     console.log("LOGIN", result, user_info, error);
        //     this.user_info = user_info;
        //     this.game.scene.getMyPlayer().loadDefaults(user_info);
        // });

        io.bind('player_add', (player_info) => {
            console.log("Server says theres a player nearby!", player_info);
            var player = this.players.addPlayer(player_info);
        });

        io.bind('player_walk', (info) => {

            var player_id = info.player_id;
            var walk_to = info.position;

            console.log("WALK_TO", walk_to);

            var player = this.players.getPlayer(player_id);

            if(!player) {
                mcec.log("Cannot find player #" + player_id);
                return;
            }

            console.log("PLAYER WALK", player_id, player);

            if(player.model.position.x !== walk_to.x || player.model.position.y !== walk_to.y) {
                player.walkTo(walk_to.x, walk_to.z);
            } else {
                console.log("Player doesnt need to move!", walk_to, player.model.position);
            }
        });

        io.bind('player_remove', (player_id) => {
            mcec.log("Server says to remove player " + player_id);
            var player = this.players.removePlayer(player_id);
        });
    }

    inject () {
        // run after start() was called, and everything has loaded

        mcec.log("Injecting renderer into DOM element");

        this.getContainer().appendChild(this.getRenderer().domElement);
        //this.getContainer().appendChild(this.getRenderer(true).domElement);

        var elem = $(this.getRenderer().domElement);
        elem.attr('id', 'game');

        mcec.bindClick(true, (e) => {
            this.handleClick(e);
        });

        return true;
    }

    update (delta) {
        this.models.update(delta);
        this.camera.update(delta);

        if(this.game.state <= 0) {
            this.camera.setLoginCamera();
            this.hide();
        } else {
            this.models.startQueue();
            this.show();
        }

        if(this.getMyPlayer() !== false) {
            if (this.getMyPlayer().isMeshLoaded()) {
                if (typeof this.skybox !== "undefined") {
                    // move the skybox around our player
                    this.skybox.position.x = this.getMyPlayer().model.position.x;
                    this.skybox.position.z = this.getMyPlayer().model.position.z;
                }

                if (typeof this.water !== "undefined" && typeof this.water.position !== "undefined") {
                    // .. and the water?
                    this.water.position.x = this.getMyPlayer().model.position.x;
                    this.water.position.z = this.getMyPlayer().model.position.z;
                }
            }
        }

        if(typeof this.water !== "undefined") {
            if(typeof this.water.children !== "undefined")
            this.water.children[0].material.uniforms.time.value += 0.4 / 60.0;
        }
    }
}

module.exports = scene;