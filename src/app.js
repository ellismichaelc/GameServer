var mcec = require('../src/mcec');
var app = require('http').createServer();
var io = require('socket.io')(app);
var player = require('./player');
var database = require('../src/database');
var fs = require('fs');

class server {
    constructor() {
        this.server_port = mcec.config('server_port');
        this.server_id = 1; // instance of server.. get from boot args or some shit.. for now just 1 since we have just 1 server you idiot

        mcec.log("Server initializing");

        // version to enforce
        this.version = '0.0.1b';

        // settings
        this.player_view_radius = 10000;

        // this will hold our player objects
        this.players = [];

        // connect to database, start server once its connected
        this.startDatabase(() => {

            // start the server, listen on port
            this.startServer();
        });
    }

    incomingConnection(socket) {
        this.players.push(new player(this, socket));
    }

    startDatabase(callback) {
        this.db = new database(this, callback);
        global.db = this.db;
        global.io = this.io;
    }

    startServer() {
        mcec.log("Starting up server on port " + this.server_port);

        app.listen({
            port: this.server_port,
            serveClient: false,
            pingInterval: 1000,
            pingTimeout: 15000
        });

        // bind just connect, the rest is done internally by the player class
        io.on('connect', (socket) => { this.incomingConnection(socket); });

        this.timer = setInterval(() => {
            this.handleTick();
        }, 100);
    }

    playerDisconnected(player) {
        for(var i in this.players) {
            var p = this.players[ i ];

            if(p == player) {
                this.players[ i ].unload(() => {
                    delete this.players[ i ];

                    mcec.log("Removed player");
                });
            }
        }

        //syncPosition()
    }

    // check things..
    // todo: add mysql connection testing
    handleTick() {
        var time = Math.round(new Date().getTime()/1000);

        // update all players
        this.loopPlayers((player) => {
            player.handleUpdate(time);
        });

        // calculate player radius's
        // this.loopPlayers((player) => {
        //
        //     this.loopPlayers((player2) => {
        //
        //         var dist =
        //
        //     }, player);
        // });

        this.db.handleTick(time);
    }

    loopPlayers(callback, exclude) {
        for(var i in this.players) {
            var player = this.players[ i ];

            if(player !== exclude) callback(player);
        }
    }

    loopConnectedPlayers(callback, exclude) {
        for(var i in this.players) {
            var player = this.players[ i ];

            if(player.is_connected == false) continue;

            if(player !== exclude) callback(player);
        }
    }

    // get view HTML
    getViewHTML(name, params) {
        // todo: security: check for valid view names!

        var view = fs.readFileSync('app/views/' + name + '.html', 'utf8');
        var css = "";

        try {
            css = fs.readFileSync('app/css/' + name + '.css', 'utf8');
        } catch(e){}

        var html = `<style>${css}</style>${view}`;

        if(params) {
            try {

                html = html.replace(/\$\{(.*?)\}/g, function (match, contents, offset, input_string) {

                    var parts = contents.split('.');
                    var val = params;

                    for (var i = 0; i < parts.length; i++) {
                        var part = parts[i];
                        val = val[part];
                    }

                    return val;

                });

            } catch(e) {}
        }

        return html;
    }
}
module.exports = new server();