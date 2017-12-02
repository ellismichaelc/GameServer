import Cow from "./cow.js";
import Chicken from "./chicken.js";
import World from "./world.js";
import LoadModels from "./loadmodels.js";
import ChatHandler from "./chatHandler.js";

export default class Playground{
	constructor(name, animal){
        // let self = this;
        //
        this.socket = null;
        // this.isdragging = false;
        //this.world;
        this.info = {name: name, animal: animal};
        // this.animal = null;
        // this.animals = [];
        // this.clock = new THREE.Clock();
        // this.scene = new THREE.Scene();
        // this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
        //
        // this.hemilight;
        // this.dirlight;
        //
        // this.raycaster = new THREE.Raycaster();
        // this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        //
        // this.camera.position.set(75, 0, -40);
        // this.camera.target = new THREE.Vector3(0, 0, 0);
        // this.camera.up.set(1, 0, -1);
        // this.camera.lookAt( this.camera.target );
        //
        // this.setlighting();
        // this.setskydome();
        // this.setrenderer();
        //
        // this.controls = new THREE.TrackballControls(this.camera);//, this.renderer.domElement);
        // this.controls.target.copy(this.camera.target);
        // this.controls.noPan = true;
        // this.controls.rotateSpeed = 8.0;
        // this.controls.minDistance = 20;
        // this.controls.maxDistance = 400;
        //
        // this.textbox = document.querySelectorAll(".chat")[0];
        // this.textboxIsActive = false;
        // this.chat = new ChatHandler();
        //
        // this.clientClickX = 0;
    	// this.clientClickY = 0;
        //

    	//


        this.motion = {
            airborne : false,
            position : new THREE.Vector3(), velocity : new THREE.Vector3(),
            rotation : new THREE.Vector2(), spinning : new THREE.Vector2()
        };
        this.renderer = new THREE.WebGLRenderer({ antialias : true });
        this.camera = new THREE.PerspectiveCamera( 60, 1, 0.1, 9000 );
        this.scene = new THREE.Scene();


        //
		// this.textbox.addEventListener("focus", () => {
		// 	self.textboxIsActive = true;
		// }, true);
        //
		// this.textbox.addEventListener("blur", () => {
		// 	self.textboxIsActive = false;
		// }, true);
        //
		// this.renderer.domElement.addEventListener("touchend", (event) => {
		// 	self.onMouseUp(self.translateTouchEvent(event))
		// }, false);
        //
		// this.renderer.domElement.addEventListener("touchstart", (event) => {
		// 	self.onMouseDown(self.translateTouchEvent(event));
		// }, false);

		// this.renderer.domElement.addEventListener("mouseup", (event) => {
		// 	self.onMouseUp(event)
		// }, false);
        //
		// this.renderer.domElement.addEventListener("mousedown", (event) => {
		// 	self.onMouseDown(event)
		// }, false);

        //this.controls.addEventListener("resize", () => { self.onWindowResize() }, false );
        // this.controls.addEventListener("keydown", (event) => { self.onKeyDown(event) }, false);

        //this.controls.addEventListener('change', this.draw);

		this.motion.position.y = -150;

		this.reference = new LoadModels();
		this.reference.load().then(this.startInitialize());
	}

	startInitialize() {

		mcec.log("INITIALIZE("+this.info.name+", "+this.info.animal+")");

        mcec.log("Connecting to server: " + mcec.getServerAddress());
        this.socket = io.connect(mcec.getServerAddress());

		//this.world = new World(this.reference, 1500);
		//this.world.loadToScene(this.scene);

		mcec.log("Waiting for init packet back to render world ..");

		this.socket.emit("initialize", {data: "this is my data"});
		this.socket.on("initialize", (data) => {this.sockOnInitialize(data);});

		// this.socket.on("syncplayers", (players) => {
		// 	mcec.log("SYNC PLAYERS");
         //    players.map((animal) => {
		// 		let c = this.getAnimal(animal.id, animal.name, animal.animaltype, new THREE.Vector3(animal.x, animal.y, animal.z));
		// 		c.updateMovement(this.world.mesh);
		// 		console.log("ADDING TO ANIMALS: " + c)
		// 		this.animals.push(c);
		// 	});
		// 	document.querySelector("#animalcount").textContent = this.animals.length + 1;
		// });
        //
		// this.socket.on("newplayer", (animal) => {
         //    mcec.log("NEW PLAYERS");
		// 	let ani = this.getAnimal(animal.id, animal.name, animal.animaltype, new THREE.Vector3(animal.x, animal.y, animal.z));
		// 	ani.updateMovement(this.world.mesh);
		// 	this.animals.push(ani);
		// 	document.querySelector("#animalcount").textContent = this.animals.length + 1;
        //
		// });
        //
		// this.socket.on("removeplayer", (data) => {
         //    mcec.log("REMOVE PLAYERS");
		// 	for(var i = 0; i < this.animals.length; i++) {
		// 	    if(this.animals[i].id == data.id) {
		// 			this.animals[i].remove();
		// 	        this.animals.splice(i, 1);
		// 	        break;
		// 	    }
		// 	}
		// 	document.querySelector("#animalcount").textContent = this.animals.length + 1;
		// });
        //
        // this.socket.on("message", (animal) => {
         //    mcec.log("MESSAGE");
         //    this.chat.appendMessage(animal.name, animal.message);
		// });
        //
        // this.socket.on("move", (animal) => {
         //    mcec.log("MOVE");
		// 	console.log(this.animals);
		// 	let movinganimal = this.animals.find((a) => { return a.id === animal.id });
		// 	let newpoint = new THREE.Vector3(animal.x, animal.y, animal.z);
		// 	movinganimal.moveTowardsTarget(newpoint);
		// });

	}

	sockOnInitialize(data) {
        var id = data.id;
        var message = data.data;

        mcec.log("Received initialize packet back. " + message);
        mcec.log("Rendering world!");

        const x = 37.049533439151695,
            y = 504.9169002010969,
            z = 252.38907703563717;

        //this.animal = this.getAnimal(id, this.info.name, this.info.animal, new THREE.Vector3(x, y, z));

        // player motion parameters
        var motion = {
            airborne : false,
            position : new THREE.Vector3(), velocity : new THREE.Vector3(),
            rotation : new THREE.Vector2(), spinning : new THREE.Vector2()
        };
        motion.position.y = -150;
        // game systems code
        var resetPlayer = function() {
            if( motion.position.y < -123 ) {
                motion.position.set( -2, 7.7, 25 );
                motion.velocity.multiplyScalar( 0 );
            }
        };
        var keyboardControls = (function() {
            var keys = { SP : 32, W : 87, A : 65, S : 83, D : 68, UP : 38, LT : 37, DN : 40, RT : 39 };
            var keysPressed = {};
            (function( watchedKeyCodes ) {
                var handler = function( down ) {
                    return function( e ) {
                        var index = watchedKeyCodes.indexOf( e.keyCode );
                        if( index >= 0 ) {
                            keysPressed[watchedKeyCodes[index]] = down; e.preventDefault();
                        }
                    };
                };
                window.addEventListener( "keydown", handler( true ), false );
                window.addEventListener( "keyup", handler( false ), false );
            })([
                keys.SP, keys.W, keys.A, keys.S, keys.D, keys.UP, keys.LT, keys.DN, keys.RT
            ]);
            var forward = new THREE.Vector3();
            var sideways = new THREE.Vector3();
            return function() {
                if( !motion.airborne ) {
                    // look around
                    var sx = keysPressed[keys.UP] ? 0.03 : ( keysPressed[keys.DN] ? -0.03 : 0 );
                    var sy = keysPressed[keys.LT] ? 0.03 : ( keysPressed[keys.RT] ? -0.03 : 0 );
                    if( Math.abs( sx ) >= Math.abs( motion.spinning.x ) ) motion.spinning.x = sx;
                    if( Math.abs( sy ) >= Math.abs( motion.spinning.y ) ) motion.spinning.y = sy;
                    // move around
                    forward.set( Math.sin( motion.rotation.y ), 0, Math.cos( motion.rotation.y ) );
                    sideways.set( forward.z, 0, -forward.x );
                    forward.multiplyScalar( keysPressed[keys.W] ? -0.1 : (keysPressed[keys.S] ? 0.1 : 0));
                    sideways.multiplyScalar( keysPressed[keys.A] ? -0.1 : (keysPressed[keys.D] ? 0.1 : 0));
                    var combined = forward.add( sideways );
                    if( Math.abs( combined.x ) >= Math.abs( motion.velocity.x ) ) motion.velocity.x = combined.x;
                    if( Math.abs( combined.y ) >= Math.abs( motion.velocity.y ) ) motion.velocity.y = combined.y;
                    if( Math.abs( combined.z ) >= Math.abs( motion.velocity.z ) ) motion.velocity.z = combined.z;
                    //jump
                    var vy = keysPressed[keys.SP] ? 0.7 : 0;
                    motion.velocity.y += vy;
                }
            };
        })();
        var jumpPads = (function() {
            var pads = [ new THREE.Vector3( -17.5, 8, -10 ), new THREE.Vector3( 17.5, 8, -10 ), new THREE.Vector3( 0, 8, 21 ) ];
            var temp = new THREE.Vector3();
            return function() {
                if( !motion.airborne ) {
                    for( var j = 0, n = pads.length; j < n; j++ ) {
                        if ( pads[j].distanceToSquared( motion.position ) < 2.3 ) {
                            // calculate velocity towards another side of platform from jump pad position
                            temp.copy( pads[j] ); temp.y = 0; temp.setLength( -0.8 ); temp.y = 0.7;
                            motion.airborne = true; motion.velocity.copy( temp ); break;
                        }
                    }
                }
            };
        })();
        var applyPhysics = (function() {
            var timeStep = 5;
            var timeLeft = timeStep + 1;
            var birdsEye = 100;
            var kneeDeep = 0.4;
            var raycaster = new THREE.Raycaster();
            raycaster.ray.direction.set( 0, -1, 0 );
            var angles = new THREE.Vector2();
            var displacement = new THREE.Vector3();
            return function( dt ) {
                var platform = scene.getObjectByName( "platform", true );
                if( platform ) {
                    timeLeft += dt;
                    // run several fixed-step iterations to approximate varying-step
                    dt = 5;
                    while( timeLeft >= dt ) {
                        var time = 0.3, damping = 0.93, gravity = 0.01, tau = 2 * Math.PI;
                        raycaster.ray.origin.copy( motion.position );
                        raycaster.ray.origin.y += birdsEye;
                        var hits = raycaster.intersectObject( platform );
                        motion.airborne = true;
                        // are we above, or at most knee deep in, the platform?
                        if( ( hits.length > 0 ) && ( hits[0].face.normal.y > 0 ) ) {
                            var actualHeight = hits[0].distance - birdsEye;
                            // collision: stick to the surface if landing on it
                            if( ( motion.velocity.y <= 0 ) && ( Math.abs( actualHeight ) < kneeDeep ) ) {
                                motion.position.y -= actualHeight;
                                motion.velocity.y = 0;
                                motion.airborne = false;
                            }
                        }
                        if( motion.airborne ) motion.velocity.y -= gravity;
                        angles.copy( motion.spinning ).multiplyScalar( time );
                        if( !motion.airborne ) motion.spinning.multiplyScalar( damping );
                        displacement.copy( motion.velocity ).multiplyScalar( time );
                        if( !motion.airborne ) motion.velocity.multiplyScalar( damping );
                        motion.rotation.add( angles );
                        motion.position.add( displacement );
                        // limit the tilt at ±0.4 radians
                        motion.rotation.x = Math.max( -0.4, Math.min ( +0.4, motion.rotation.x ) );
                        // wrap horizontal rotation to 0...2π
                        motion.rotation.y += tau; motion.rotation.y %= tau;
                        timeLeft -= dt;
                    }
                }
            };
        })();
        var updateCamera = (function() {
            var euler = new THREE.Euler( 0, 0, 0, 'YXZ' );
            return function() {
                euler.x = motion.rotation.x;
                euler.y = motion.rotation.y;
                camera.quaternion.setFromEuler( euler );
                camera.position.copy( motion.position );
                camera.position.y += 3.0;
            };
        })();
        // init 3D stuff
        function makeSkybox( urls, size ) {
            var skyboxCubemap = new THREE.CubeTextureLoader().load( urls );
            skyboxCubemap.format = THREE.RGBFormat;
            var skyboxShader = THREE.ShaderLib['cube'];
            skyboxShader.uniforms['tCube'].value = skyboxCubemap;
            return new THREE.Mesh(
                new THREE.BoxGeometry( size, size, size ),
                new THREE.ShaderMaterial({
                    fragmentShader : skyboxShader.fragmentShader, vertexShader : skyboxShader.vertexShader,
                    uniforms : skyboxShader.uniforms, depthWrite : false, side : THREE.BackSide
                })
            );
        }
        function makePlatform( jsonUrl, textureUrl, textureQuality ) {
            var placeholder = new THREE.Object3D();
            var texture = new THREE.TextureLoader().load( textureUrl );
            texture.minFilter = THREE.LinearFilter;
            texture.anisotropy = textureQuality;
            var loader = new THREE.JSONLoader();
            loader.load( jsonUrl, function( geometry ) {
                geometry.computeFaceNormals();
                var platform = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ map : texture }) );
                platform.name = "platform";
                placeholder.add( platform );
            });
            return placeholder;
        }

        this.renderer = new THREE.WebGLRenderer({ antialias : true });

        var app = this;
        app.renderer.setPixelRatio( window.devicePixelRatio );
        var camera = new THREE.PerspectiveCamera( 60, 1, 0.1, 9000 );
        var scene = new THREE.Scene();
        scene.add( camera );
        scene.add( makeSkybox( [
            'textures/cube/skybox/px.jpg', // right
            'textures/cube/skybox/nx.jpg', // left
            'textures/cube/skybox/py.jpg', // top
            'textures/cube/skybox/ny.jpg', // bottom
            'textures/cube/skybox/pz.jpg', // back
            'textures/cube/skybox/nz.jpg'  // front
        ], 8000 ));

        var loader = new THREE.JSONLoader();
        loader.load( 'shared/island.json', function( geometry, materials ) {
            //geometry.computeFaceNormals();
            var platform = new THREE.Mesh( geometry, materials );
            //platform.name = "platform";
            scene.add( platform );
        });

        // scene.add( makePlatform(
        //     'shared/island.json',
        //     'models/platform/platform.jpg',
        //     app.renderer.getMaxAnisotropy()
        // ));
        // start the game
        var start = function( gameLoop, gameViewportSize ) {
            var resize = function() {
                var viewport = gameViewportSize();
                app.renderer.setSize( viewport.width, viewport.height );
                camera.aspect = viewport.width / viewport.height;
                camera.updateProjectionMatrix();
            };
            window.addEventListener( 'resize', resize, false );
            resize();
            var lastTimeStamp;
            var render = function( timeStamp ) {
                var timeElapsed = lastTimeStamp ? timeStamp - lastTimeStamp : 0; lastTimeStamp = timeStamp;
                // call our game loop with the time elapsed since last rendering, in ms
                gameLoop( timeElapsed );
                app.renderer.render( scene, camera );
                requestAnimationFrame( render );
            };
            requestAnimationFrame( render );
        };
        var gameLoop = function( dt ) {
            resetPlayer();
            keyboardControls();
            jumpPads();
            applyPhysics( dt );
            updateCamera();
        };
        var gameViewportSize = function() { return {
            width: window.innerWidth, height: window.innerHeight
        }};
        this.setrenderer();
        start( gameLoop, gameViewportSize );
    }


	// this.socket.emit("new animal", {
	//     x: this.animal.body.position.x,
	//     y: this.animal.body.position.y,
	//     z: this.animal.body.position.z,
	//     name: this.animal.name,
	//     animaltype: this.animal.animaltype
	// });

	// this.animal.body.add(this.camera);
	//
	// this.draw();
	//
	// this.animal.updateMovement(this.world.mesh);
	//
	// this.animate();

	onMouseDown(event){
		this.clientClickX = event.clientX;
  		this.clientClickY = event.clientY;
	}

	onMouseUp(event){
		// mcec.log("Mouse up");
		// mcec.log(event);
		// mcec.log([this.clientClickX,this.clientClickY]);

		if (event.target !== this.renderer.domElement) { return; }
	 	let x = event.clientX;
        let y = event.clientY;
        if( x != this.clientClickX || y != this.clientClickY ){return; }

        mcec.log("Event: Mouse Click");

		var mouse = {
			x: ( x / window.innerWidth ) * 2 - 1,
			y: - ( y / window.innerHeight ) * 2 + 1
		}
		this.raycaster.setFromCamera( mouse, this.camera );

		var intersects = this.raycaster.intersectObject( this.world.mesh );

		if(intersects.length){
			var point = intersects[ 0 ].point;
			var newpoint = new THREE.Vector3(point.x / this.animal.scale, point.y / this.animal.scale, point.z / this.animal.scale);
			this.animal.moveTowardsTarget(newpoint);

			this.socket.emit("move animal", {
				x: newpoint.x,
				y: newpoint.y,
				z: newpoint.z
			});
		}
	}

	getAnimal(id, name, animal, pos){
		if(animal === "cow"){
			return new Cow(id, pos, name, 4, this.reference.cow, this.scene);
		} else{
			return new Chicken(id, pos, name, 4, this.reference.chicken, this.scene);
		}
	}

	onKeyDown(event){
		let self = this;
  		let keyCode = event.keyCode;
	  	if(this.textboxIsActive && keyCode === 13 && self.textbox.value !== ""){
		  	self.socket.emit("new message", {
					message: self.textbox.value
		  	});
		  	self.chat.appendMessage(self.animal.name, self.textbox.value);
	   		self.textbox.value = "";
	  	}
	}

	onWindowResize(){
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.controls.handleResize();
		this.draw();
	}

	translateTouchEvent(e) {
	    e.stopPropagation();
	    e.preventDefault();
		if(e.touches.length){
			return {
				clientX: e.touches[0].clientX,
				clientY: e.touches[0].clientY,
				preventDefault: e.preventDefault,
				target: this.renderer.domElement
			};
		} else {
			return{
				clientX: e.changedTouches[0].clientX,
				clientY: e.changedTouches[0].clientY,
				preventDefault: e.preventDefault,
				target: this.renderer.domElement
			};
		}

	}

	setskydome(){
		this.scene.fog = new THREE.Fog( 0xffffff, 1, 5000 );
		this.scene.fog.color.setHSL( 0.6, 0, 1 );

		var vertexShader = document.getElementById( 'vertexShader' ).textContent;
		var fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
		var uniforms = {
			topColor: 	 { type: "c", value: new THREE.Color( 0x264348 ) },
			bottomColor: { type: "c", value: new THREE.Color( 0x044F67 ) },
			offset:		 { type: "f", value: 33 },
			exponent:	 { type: "f", value: 0.6 }
		};
		//uniforms.topColor.value.copy( this.hemilight.color );

		this.scene.fog.color.copy( uniforms.bottomColor.value );

		var skyGeo = new THREE.SphereGeometry( 4000, 32, 15 );
		var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );

		var sky = new THREE.Mesh( skyGeo, skyMat );
		this.scene.add( sky );
	}

	setlighting(){
		this.hemilight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
		this.hemilight.color.setHSL( 0.6, 1, 0.6 );
		this.hemilight.groundColor.setHSL( 0.095, 1, 0.75 );
		this.hemilight.position.set( 0, 500, 0 );
		this.scene.add( this.hemilight );

		this.dirlight = new THREE.DirectionalLight( 0xffffff, 1 );
		this.dirlight.color.setHSL( 0.1, 1, 0.95 );
		this.dirlight.position.set( -1, 1.75, 1 );
		this.dirlight.position.multiplyScalar( 50 );
		this.scene.add( this.dirlight );

		this.dirlight.castShadow = true;

		this.dirlight.shadowMapWidth = 2048;
		this.dirlight.shadowMapHeight = 2048;

		var d = 50;

		this.dirlight.shadowCameraLeft = -d;
		this.dirlight.shadowCameraRight = d;
		this.dirlight.shadowCameraTop = d;
		this.dirlight.shadowCameraBottom = -d;

		this.dirlight.shadowCameraFar = 3500;
		this.dirlight.shadowBias = -0.0001;
	}

	setrenderer(){
		this.renderer.setClearColor( "#CCCCCC" );
		this.renderer.sortObjects = false;
		this.renderer.autoClear = false;
		this.renderer.gammaInput = true;
		this.renderer.gammaOutput = true;
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.shadowMapEnabled = true;
		this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
		let container = document.createElement( 'div' );
		document.body.appendChild(container);
		container.appendChild( this.renderer.domElement );
	}

	animate() {
        window.requestAnimationFrame(() => {this.draw();});
        //this.renderer.clear();
        //this.renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
        this.controls.update();
	}

	draw(){
		this.renderer.render(this.scene, this.camera);
		this.controls.update();

        this.handleMovement(this.animal);

        this.animals.map((animal) => {
            this.handleMovement(animal);
		});
	}

	handleMovement(animal){
		if(animal.moving){
			animal.updateMovement(this.world.mesh, this.scene);
		}

		if(animal.hasMesh) {
            animal.textMesh.lookAt(this.camera.position);
            animal.textMesh.up.copy(this.camera.up);
        }
	}
}
