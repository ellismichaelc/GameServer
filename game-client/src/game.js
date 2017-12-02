//global.THREE = require('../js/build/three.min');

var mcec = require('../shared/mcec');
var io = require('../src/sockets');
var scene = require('../src/scene');
var login = require('../src/login');
var jQuery = require('../js/jquery-1.12.4.min');

class game {
    constructor() {
        global.$ = jQuery;
        global.mcec = mcec;

        // version to enforce
        this.version = '0.0.1b';

        // yeah
        this.clock = new THREE.Clock();

        // main bitches
        this.login = new login(this);
        this.scene = new scene(this);

        // idk
        this.state = -1; // havent received a state
        this.last_state = false;
        this.login_ready = false;

        mcec.setApp(this);
        mcec.getApp().start();
    }


    update() {
        var delta = this.clock.getDelta();

        if(typeof this.login !== "undefined") this.login.update(delta);
        if(typeof this.scene !== "undefined") this.scene.update(delta);
    }

    setBinds() {
        // bind events and such
        var get_ping = () => {
            io.send('latency', Date.now(), function(startTime) {
                var latency = Date.now() - startTime;
                mcec.log('My ping is: ' + latency + 'ms');
            });
        };

        io.bind('connect', () => {
            mcec.log("Socket connected.");

            get_ping();
        });

        io.bind('message', (msg) => {
            mcec.log("Incoming fucking message " + msg);
        });

        io.bind('disconnect', () => {
            mcec.log("Socket disconnected.");

            this.state = -1;
            this.scene.doReset();
        });

        io.bind('ping', () => {
            get_ping();
        });

        io.bind('state', (state) => {
            mcec.log("Server says my state is: " + state);

            this.state = state;
        });

        this.scene.setBinds();
    }

    start() {
        // start connection and create socket (before binds)
        io.connect();

        this.setBinds();

        // this is where the magic happens
        //var login = this.login;
        //login.show();
    }
}

module.exports = game;