var players = require('../src/players');
var world = require('../src/world');
var renderer = require('../src/renderer');
var camera = require('../src/camera');
var terrain = require('../src/terrain');
var mcec = require('../shared/mcec');
var io = require('../src/sockets');
var views = require('../src/views');
import models from '../src/models';
import '../js/objects/water';
//import '../js/water-material';

class login {
    constructor(game) {
        this.game = game;
        this.enabled = false;

        this.start();
    }

    // called upon init
    start() {
        // create a div that we will put our login screen into
        this.div = $('<div>').attr('id', 'container-login');

        // this is a div that will be displayed when the server isnt connected
        this.loading_div = $('#container-loading');

        // inject our login div into the page
        $('body').prepend(this.div);
    }

    hide() {
        this.loading_div.hide()
        this.div.fadeOut(500, () => {
           this.div.hide();
           this.div.html('');
        });
    }

    // called to show the login screen
    show() {
        if(this.is_showing) return;
        this.is_showing = true;

        mcec.log("Showing login screen");

        views.clearBinds();

        views.load('login', (html) => {
            this.div.html(html);
            this.loading_div.hide();
            this.div.show();
        }).bindForm('login', (data, inputs, e) => {
            this.doLogin(inputs.user, inputs.pass);
        });

        //this.game.scene.camera.setLoginCamera();
    }

    show_loader() {
        this.div.hide();
        this.div.html('');

        this.loading_div.show();

        this.game.scene.camera.setLoginCamera();
    }

    doLogin(user, pass) {
        mcec.log(`doLogin(${user}, ${pass})`);

        io.send('login', {user: user, pass: pass}, (result, user_info, error) => {
            mcec.log("LOGIN", result, user_info, error);
            if(result == true) {
                this.user_info = user_info;
                this.game.scene.getMyPlayer().loadDefaults(user_info);
            } else {
                alert(error);
            }
        });
    }

    // called per tick
    update(delta) {
        if(typeof this.div == "undefined") return;

        var changed = false;

        if(this.last_state !== this.game.state) changed = true;
        this.last_state = this.game.state;

        if(changed) {
            this.is_showing = false;
        }

        if (this.game.state == -1) {
            this.show_loader();
        }

        if(this.game.state <= 0) {
            this.show();
        }

        if(this.game.state > 0) {
            this.hide();
        }
    }
}

module.exports = login;