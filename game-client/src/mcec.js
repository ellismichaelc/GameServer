class mcec {

    constructor() {

        this.dev_mode = function() {
            if (typeof window !== 'undefined') {
                // this means we are client
                return (window.location.hostname.indexOf('localhost') !== -1 || window.location.hostname.indexOf('127.0.0.1') !== -1 || window.location.href.indexOf('#dev_mode') !== -1);
            } else {
                // this means we are server
                for(var i=0; i<process.argv.length; i++) {
                    if(process.argv[i] === "dev") return true;
                }
            }
            return false;
        }();

        let prod_config = {
            server_ip: "game.mcec.io",
            server_port: "9000"
        };

        let dev_config = {
            server_ip: "game.mcec.io",
            server_port: "9200"
        };

        this._config = (this.dev_mode ? dev_config : prod_config);

        this.log("Initializing");
        if(this.dev_mode) this.log("Set dev mode");
    }

    config(name) {
        return this._config[name];
    }

    log() {
        if(!this.isDevMode()) return;

        var args = ["[MCEC]"];

        for(var i in arguments) {
            var arg = arguments[ i ];

            args.push(arg);
        }

        console.log.apply(null, args);
    }

    //////

    bindKey(key, callback) {

        if(typeof key == "object") {
            for(var i in key) {
                this.bindKey(key[i], callback);
            }

            return;
        }

        if(typeof this.keyBinds[ key ] == "undefined") {
            this.keyBinds[key] = [];
        }

        this.keyBinds[ key ].push(callback);

        this.log("Added keybind for key #" + key);
    }

    bindClick(down, callback) {

        if(typeof this.mouseBinds[ down ] == "undefined") {
            this.mouseBinds[ down ] = [];
        }

        this.mouseBinds[ down ].push(callback);

        this.log("Added mouse bind for down = " + (down == true));
    }

    bindMove(callback) {

        if(typeof this.mouseMoveBinds == "undefined") {
            this.mouseMoveBinds = [];
        }

        this.mouseMoveBinds.push(callback);

        this.log("Added mouse bind for movement");
    }

    getViewportSize () {
        return {
            width: window.innerWidth, height: window.innerHeight
        };
    }

    isDevMode() {
        return this.dev_mode;
    }

    getServerAddress() {
        return this.config('server_ip') + ":" + this.config('server_port');
    }

    setApp(inst) {
        this.app = inst;
    }

    getApp() {
        return this.app;
    }

    key(key) {
        var key = this.keysPressed[key];
        return ((key) ? key : false);
    }

    keyDown(key) {
        return this.key(key);
    }

    pressKey(key, down) {
        this.keysPressed[ key ] = down;

        if(down) {
            if (typeof this.keyBinds[key] == "undefined") return false;

            for(var i=0; i<this.keyBinds[ key ].length; i++) {
                this.keyBinds[ key ][ i ]();
            }
        }
    }

    pressMouse(down, e) {
        this.mouseDown = down;

        if (typeof this.mouseBinds[ down ] == "undefined") return false;

        for(var i=0; i<this.mouseBinds[ down ].length; i++) {
            this.mouseBinds[ down ][ i ](e);
        }
    }

    moveMouse(e) {
        this.mouseMove = e;

        this.mouse = new THREE.Vector2();
        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        if (typeof this.mouseMoveBinds == "undefined") return false;

        for(var i=0; i<this.mouseMoveBinds.length; i++) {
            this.mouseMoveBinds[ i ](e);
        }
    }

    ifKeyDown(key, callback) {
        if(this.key(key)) {
            callback();
        }
    }

    watchControls (domElement) {
        this.log("Watching mouse & keys");

        var self = this;

        //
        // KEYS
        //

        this.keysPressed = {};
        this.keyBinds = {};

        var handler = function (down, self) {
            return function (e) {
                var key = e.keyCode;
                if (key >= 0) {
                    self.pressKey(key, down);
                    //e.preventDefault();
                }
            };
        };

        window.addEventListener("keydown", handler(true, this), false);
        window.addEventListener("keyup", handler(false, this), false);

        //
        // MOUSE BUTTONS
        //

        this.mouseDown = false;
        this.mouseBinds = {};

        handler = function (down, self) {
            return function (e) {
                self.pressMouse(down, e);
                //e.preventDefault();
            };
        };

        window.addEventListener("mousedown", handler(true, this), false);
        window.addEventListener("mouseup", handler(false, this), false);

        //
        // MOUSE MOVEMENT
        //

        this.mouseDown = false;
        this.mouseBinds = {};

        handler = function (self) {
            return function (e) {
                self.moveMouse(e);
                //e.preventDefault();
            };
        };

        window.addEventListener( 'mousemove', handler(this) );

        //
        // TOUCH CONTROLS BITCH
        //

        handler = function (event) {
            var touches = event.changedTouches,
                first = touches[0],
                type = "";
            switch(event.type)
            {
                //case "touchstart": type = "mousedown"; break;
                //case "touchmove":  type = "mousemove"; break;
                case "touchend":   type = "mousedown";   break;
                default:           return;
            }

            // initMouseEvent(type, canBubble, cancelable, view, clickCount,
            //                screenX, screenY, clientX, clientY, ctrlKey,
            //                altKey, shiftKey, metaKey, button, relatedTarget);

            var simulatedEvent = window.createEvent("MouseEvent");
            simulatedEvent.initMouseEvent(type, true, true, window, 1,
                first.screenX, first.screenY,
                first.clientX, first.clientY, false,
                false, false, false, 0/*left*/, null);

            first.target.dispatchEvent(simulatedEvent);
            //event.preventDefault();
        };

        window.addEventListener("touchstart", handler, true);
        window.addEventListener("touchmove", handler, true);
        window.addEventListener("touchend", handler, true);
        window.addEventListener("touchcancel", handler, true);

        //
        // BLOCK RIGHT CLICK
        //

        window.oncontextmenu = function(e) { e.preventDefault(); return false; };
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    loop(objects, callback) {
        for(var i in objects) {
            var obj = objects[ i ];

            callback(obj);
        }
    }
}

module.exports = new mcec();