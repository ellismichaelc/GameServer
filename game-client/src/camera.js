var mcec = require('../shared/mcec');

class camera {
    constructor(scene) {
        this.scene = scene;

        // todo: load defaults from config
        this.maxHeight = mcec.isDevMode() ? 500 : 150;
        this.minHeight = 35;
        //
        this.maxRotation = 360;
        this.minRotation = 0;
        //
        this.player_height = 2;
        this.camera_offset = 3;
        //
        this.reset_camera = false; // use this to reset camera rotation back to behind the player
        this.fly_mode = false; // only for development use
        this.lock_player_to_flight_camera = false; // self explanatory hahahahahahahahaha

        this.camera = this.create();

        // true will copy players position to camera position on load
        this.update_flight_cam = true;
        this.shift_multiplier = 1;
        this.shift_max = 100;
        this.shift_easing = 0.1;
    }

    watchControls() {
        var scale = 1.5;
        var x_factor = 1.8 * scale;
        var y_factor = 1.5 * scale;

        // left arrow
        mcec.ifKeyDown(37, () => {
            this.setRotation(x_factor);
        });

        // right arrow
        mcec.ifKeyDown(39, () => {
            this.setRotation(-x_factor);
        });

        // up arrow
        mcec.ifKeyDown(38, () => {
            this.setHeight(y_factor);
        });

        // down arrow
        mcec.ifKeyDown(40, () => {
            this.setHeight(-y_factor);
        });
    }

    create () {
        // todo: load these from player prefs
        this.rotation = 0;
        this.height = this.minHeight * 1.2;

        //this.height = this.maxHeight;
        this.chase = true; // true for chase camera!

        this.camera = new THREE.PerspectiveCamera(40, 1, 1, 10000);
        this.camera.useQuaternion = true;

        //this.cube = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10, 10, 10, 10), new THREE.MeshBasicMaterial({color: 0x00aaff}));
        //this.scene.add(this.cube);

        this.update_flight_cam = true;
        //this.camera.position.set(190.5868832470435, 628.201465651957, -1167.9644912477233);
        //this.camera.lookAt(new THREE.Vector3(0, -1, 0));

//            {x: -5.929157268400164, y: 280.3812646691446, z: 635.4284977385496}
// //            -0.4536856055188674, _y: 0.052359877559829876, _z: 0, _order: "XYZ",

//         p {x: 7.680423544965432, y: -68.72132594194467, z: 15.180308778621093}
//         mcec.getApp().scene.camera.camera.rotation
//         Ya {_x: -0.8119535586032041, _y: -0.030033283560852827, _z: -0.03165694404998019, _order: "XYZ", onChangeCallback: ƒ}

        return this.camera;
    }

    setLoginCamera() {
        this.camera.position.set(-900, 300, -900);
        this.camera.lookAt(new THREE.Vector3(100, -900, 100));
    }


    // for rendering shit
    getOrthoCamera() {
        if(typeof this.camera_ortho == "undefined") {
            this.sceneRenderTarget = new THREE.Scene();

            this.camera_ortho = new THREE.OrthographicCamera( this.scene.world.width / - 2, this.scene.world.width / 2, this.scene.world.height / 2, this.scene.world.height / - 2, -10000, 10000 );
            this.camera_ortho.position.z = 1000;
            this.sceneRenderTarget.add( this.camera_ortho );
        }

        return this.camera_ortho;
    }

    get () {
        return this.camera;
    }

    setHeight(offset) {
        this.height += offset;

        if(this.height > this.maxHeight) this.height = this.maxHeight;
        if(this.height < this.minHeight) this.height = this.minHeight;

        return this.height;
    }

    setTarget (target) {
        this.camera.target = target;
        this.controls.target.copy(target);
    }

    setChase(enabled) {
        this.chase = enabled;
    }

    setRotation(offset) {

        if(this.fly_mode) return;

        if(this.chase) {
            //disable chase cam
            this.setChase(false);
            //this.rotation = this.get360Rotation();
        }

        var rotation = this.rotation + offset;

        if(rotation > this.maxRotation) rotation = this.minRotation + offset;
        if(rotation < this.minRotation) rotation = this.maxRotation + offset;

        this.rotation = rotation;
        //console.log("NEW ROTATION:", rotation);

        //return this.set360Rotation(rotation);

        // console.log("ROTATION", this.rotation);
        // console.log("360", this.get360Rotation());
        // console.log("PLAYER 360", this.scene.getMyPlayer().get360Rotation());
    }

    setChaseRotation(rotation) {
        if(this.chase == false) return;

        this.set360Rotation(rotation - 90);
    }

    update (timeElapsed) {
        this.watchControls();

        var camera = this.camera;
        var scene  = this.scene;

        var dist = (this.camera_offset * 2) + (2 * this.height);
        // var x = Math.cos(((this.rotation / THREE.Math.RAD2DEG) * 180) * dist + scene.getMyPlayer().position.x;
        // var z = Math.sin(((this.rotation / THREE.Math.RAD2DEG) * 180) * dist + scene.getMyPlayer().position.z;

        // set camera position
        // camera.position.x = x;
        // camera.position.z = z;
        //camera.position.y = scene.getMyPlayer().position.y;

        if(this.scene.getMyPlayer() == false) return;
        if(this.scene.getMyPlayer().isMeshLoaded() == false) return;

        if(!this.fly_mode) {

            var position = new THREE.Vector3(scene.getMyPlayer().position.x, scene.getMyPlayer().position.y, scene.getMyPlayer().position.z);
            // add standard offset to camera position
            position.y += this.camera_offset;

            // add height offset set from arrow keys
            position.y += this.height;

            // set camera position
            camera.position.copy(position);

            // set camera position if chase cam
            if (this.chase || this.reset_camera) {
                var behind_player = scene.getMyPlayer().getVectorFromFront(-dist);

                camera.position.x = behind_player.x;
                camera.position.z = behind_player.z;

                // just run once to reset camera
                if (this.reset_camera) {
                    this.reset_camera = false;
                }
            } else {
                var obj = new THREE.Object3D();

                obj.position.copy(position);

                this.set360Rotation(this.rotation, obj);
                obj.translateZ(dist); // change to -dist

                camera.position.copy(obj.position);
            }


            // create a target
            var lookAt = new THREE.Object3D();
            lookAt.position.copy(scene.getMyPlayer().getPosition());
            lookAt.position.y += this.player_height;

            //if(this.chase) lookAt.translateZ(5);

            // look at the player
            camera.lookAt(lookAt.position);
        } else {
            if(this.update_flight_cam) {
                this.update_flight_cam = false;
                this.camera.position.copy(this.scene.getMyPlayer().model.position);
                this.camera.position.y += 50;
                this.camera.lookAt(this.scene.getMyPlayer().model.position);

                // this.camera.position.set(261.49, -73.98, -14.18);
                // var euler = new THREE.Euler(-2.72, -0.012, 3.11, 'XYZ' );
                //this.camera.setRotationFromEuler(euler);


                return;
            }

            var target = new THREE.Object3D();
            target.position.copy(camera.position);
            target.rotation.copy(camera.rotation);

            var factor = 0.2;
            target.translateZ(factor);


            var euler = new THREE.Euler( 0, 0, 0, 'YXZ' );
            euler.setFromQuaternion(camera.quaternion);

            var x_factor = 2.5;
            var y_factor = 1.5;

            // shift
            if(mcec.key('16')) {
                this.shift_multiplier += this.shift_multiplier * this.shift_easing;
                if(this.shift_multiplier > this.shift_max) this.shift_multiplier = this.shift_max;

                factor = factor * this.shift_multiplier;
            } else {
                this.shift_multiplier = 1;
            }

            // arrow up
            if(mcec.key('38')) {
                euler.x += (Math.PI / 180) * y_factor;
            }

            // arrow down
            if(mcec.key('40')) {
                euler.x -= (Math.PI / 180) * y_factor;
            }

            // arrow left
            if(mcec.key('37')) {
                euler.y += (Math.PI / 180) * x_factor;

                //camera.position.x = radius * Math.cos( angle );
                //camera.position.z = radius * Math.sin( angle );

                //angle += 0.01;
            }

            // arrow right
            if(mcec.key('39')) {
                euler.y -= (Math.PI / 180) * x_factor;
            }

            camera.quaternion.setFromEuler(euler);

            // w - up
            if(mcec.key('87')) {
                camera.translateZ(-factor);
                //camera.position.z += (-factor);
            }

            // s - down
            if(mcec.key('83')) {
                //camera.position.z += factor;
                camera.translateZ(factor);
            }

            // a - left
            if(mcec.key('65')) {
                camera.translateX(-factor);
                //camera.position.x += (-factor);
            }

            // d - right
            if(mcec.key('68')) {
                camera.translateX(factor);
                //camera.position.x += (factor);
            }

            if(mcec.key('32')) {
                this.scene.getMyPlayer().model.position.copy(camera.position);
                //this.scene.world.spawnBall(camera.position.clone());
            }

            //camera.rotation.setFromEuler(euler);
            //camera.lookAt(target);

            if(this.lock_player_to_flight_camera) {
                this.scene.getMyPlayer().model.position.x = camera.position.x;
                this.scene.getMyPlayer().model.position.z = camera.position.z;
            }


        }

        // whatever this does
        camera.updateProjectionMatrix();

        // update this variable
        this.rotation = this.get360Rotation();
    }

    _trashz() {
        //camera.lookAt(this.myplayer.getPosition());
        //camera.position.y = this.myplayer.getPosition().y + 20;

        // var rotation = new THREE.Euler(0, 0, 0);
        //
        // rotation.x = scene.getMyPlayer().rotation.x;
        // rotation.y = scene.getMyPlayer().rotation.y;
        //
        // //camera.quaternion.setFromEuler(rotation);

        // var pressed = mcec.key("32");
        // if(typeof pressed !== "undefined") {
        //     console.log(pressed);
        // }
        //console.log(camera.rotation);
        //camera.position.x += 500;
        //camera.zoom = zoomFactor;

        //console.log(this.myplayer.model.position);


        //mcec.getApp().scene.getCamera().position.y += 1000.0;
        //mcec.getApp().scene.getCamera().position.x += 8.0;

        //this.getCamera().target = this.getMyPlayer().getPosition();

        //this.getCamera().position.x = this.getMyPlayer().motion.position.x;
        //this.getCamera().position.z = this.getMyPlayer().motion.position.z;

        //var zoomFactor = 500;
    }

    get360Rotation(mesh) {
        if(!mesh) mesh = this.camera;

        var euler = new THREE.Euler();
        euler.order = "YXZ";
        euler.setFromQuaternion(mesh.quaternion);

        var rotation = (euler.y * THREE.Math.RAD2DEG) + 180;
        return rotation;
    }

    set360Rotation(degrees, mesh) {
        if(!mesh) mesh = this.camera;
        if(!degrees) degrees = this.rotation;

        var euler = new THREE.Euler();
        euler.order = "YXZ";
        euler.setFromQuaternion(mesh.quaternion);
        euler.y = ((degrees - 180)/THREE.Math.RAD2DEG);

        mesh.setRotationFromEuler(euler);
        if(mesh == this.camera) this.rotation = degrees;

        return this.rotation;
    }
}

module.exports = camera;