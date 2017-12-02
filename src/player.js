var mcec = require('../src/mcec');
var THREE = require('../game-client/js/build/three.min');
var socket_client = require('../src/socket_client');
var md5 = require('md5');
var distance = require('euclidean-distance');

class player extends socket_client {
    constructor(app, socket) {
        super(app, socket);

        // player information
        this.state = 0;
        this.last_state = -1;
        this.token = md5(socket.id);
        this.id = socket.id;
        this.username = "";
        this.user_info = {};
        this.user_id = -1;
        this.user_level = 1; // lets do higher is better, 10 = god
        this.is_connected = false; // is logged in
        this.has_init = false; // client has init
        this.state_names = ['Login', 'Game'];
        this.clock = new THREE.Clock();

        // physics/world information
        this.position = new THREE.Vector3(7623, 38, 14909); // default/new user position
        this.setting_list = {position: this.position};

        //
        this.nearby_players = [];
        this.nearby_objects = [];
        this.nearby_player_coords = [];

        // init
        this.handleInit();
    }

    // get list of other players within radius of this player
    getPlayersWithin(radius) {
        var list = [];
        this.app.loopConnectedPlayers((player) => {

            if(player.user_id < 1) return;

            var dist1 = player.position;
            var dist2 = this.position;

            var dist = distance([dist1.x,dist1.y,dist1.z], [dist2.x,dist2.y,dist2.z]);

            if(dist <= radius) {
                list.push(player);
            }
        }, this);

        return list;
    }

    // called when the player connects
    handleInit() {
        mcec.log("New player connected. Socket ID: " + this.socket.id);

        // bind some defaults
        this.on('view', (name, callback) => {
            mcec.log(`Player is requesting view: ${name}`);

            callback(this.app.getViewHTML(name, this));
        });
        this.on('login', (params, callback) => {
            this.doLogin(params.user, params.pass, callback);
        });

        this.on('walk_request', (pos, callback) => {

            // todo: validate position, and that player is allowed and capable of getting there
            // adjust if necessary

            console.log("Player requesting to walk to ", this.position);

            var can_walk = true;
            var adjusted_pos = pos;
            callback(can_walk, adjusted_pos);
        });

        this.on('walk', (pos, callback) => {

            this.position.x = pos.x;
            this.position.y = pos.y;
            this.position.z = pos.z;

            this.syncPosition();

            console.log("Player walking ", this.position);

            this.loopNearbyPlayers((player) => {
                console.log(player.user_id, "needs to be told about", this.user_id,"'s coords!");

                // send to other player!
                player.send("player_walk", {player_id: this.user_id, position: this.position});
            });

            callback(pos);
        });
    }

    syncPosition() {
        var nearby_players = this.getPlayersWithin(this.app.player_view_radius);
        var to_update = [];

        var add = {};
        var update = {};
        var remove = {};

        // is nearby
        mcec.loop(nearby_players, (player) => {
            add[ player.id ] = player;
        });

        // was nearby already
        this.loopNearbyPlayers((player) => {
            // is player still nearby or not
            if(typeof add[ player.id ] !== "undefined") {
                update[ player.id ] = player;

                delete add[ player.id ];
            } else {
                remove[ player.id ] = player;

                delete add[ player.id ];
            }
        });

        mcec.loop(Object.assign({}, add, update, remove), (player) => {
            var a = (typeof add[ player.id ] !== "undefined");
            var u = (typeof update[ player.id ] !== "undefined");
            var r = (typeof remove[ player.id ] !== "undefined");

            if(a) this.addNearbyPlayer(player);
            //if(u) this.updateNearbyPlayer(player);
            if(r) this.removeNearbyPlayer(player);
        });
    }

    addNearbyPlayer(player, dont_loop) {
        this.nearby_players.push(player);

        console.log(player.user_id, "needs to added to", this.user_id,"'s game!");

        //console.log(this.user_id, " is nearby " + player.user_id);

        //if(!dont_loop) player.addNearbyPlayer(this, true);

        this.nearby_player_coords[ player.user_id ] = player.position;

        this.send("player_add", player.getUserInfo());
    }

    updateNearbyPlayer(player) {
        if(this.nearby_player_coords[ player.user_id ] !== player.position) {
            console.log(player.user_id, "needs to be told about", this.user_id,"'s coords!");

            this.send("player_walk", {player: player.user_id, position: player.position}, function () {
                console.log("Player", player.user_id, " told to update coords for ", this.user_id);
            });

            this.nearby_player_coords[ player.user_id ] = player.position;
        }
    }

    removeNearbyPlayer(player) {
        for(var i in this.nearby_players) {
            var p = this.nearby_players[ i ];

            if(p == player) this.nearby_players.splice(p, 1);
        }

        console.log(player.user_id, "needs to removed from", this.user_id,"'s game!");

        this.send("player_remove", player.user_id, function() {
            console.log("Player", player.user_id, " told to remove #", this.user_id);
        });
    }

    loopNearbyPlayers(callback) {
        for(var i in this.nearby_players) {
            var player = this.nearby_players[ i ];

            callback(player);
        }
    }

    // socket disconnect
    handleDisconnect(reason) {
        mcec.log("Client disconnected. Reason: " + reason);
        this.app.playerDisconnected(this);
    }

    // sends time back to the client for latency calc
    handleLatency(time, callback) {
        callback(time);
    }

    // socket error
    handleError(error) {
        console.log("Socket error", error);
    }

    // updated per tick
    handleUpdate(time) {
        if(this.is_connected) {
            this.state = 1; // game
        }

        if(time - this.last_sync > 5 || this.state !== this.last_state) {
            this.syncState();

            this.last_sync = time;
            this.last_state = this.state;
        }

        if(this.is_connected) {
            this.syncPosition();


            if(typeof this.last_session_update == "undefined") this.last_session_update = time;
            if(time - this.last_session_update > 15) {

                db.refreshSession(this.token);

                this.last_session_update = time;
            }

            if(typeof this.last_settings_save == "undefined") this.last_settings_save = time;
            if(time - this.last_settings_save > 30) {

                this.saveSettings();

                this.last_settings_save = time;
            }

        }
    }

    isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    // loads user settings out the db
    loadSettings(callback) {
        var load_list = {};

        for(var name in this.setting_list) {
            load_list[ name ] = true;
            db.loadUserSetting(this.user_id, name, (result) => {
                if(result) {
                    this.user_info[ name ] = result;

                    if(name == "position") {
                        this.position = this.user_info[ name ];
                    }
                }

                delete load_list[ name ];

                if(this.isEmpty(load_list)) {
                    this.settingsInit();
                    callback(true, this.user_info);
                    //console.log("USER SETTINGS", this.user_info);
                }
            });
        }

        mcec.log("Loaded settings for player");
    }

    // all settings have been loaded into this.user_info
    settingsInit() {

        // new user wont have user_info position loading from DB so lets just make it the default one in the constructor
        if(typeof this.user_info.position == "undefined") this.user_info.position = this.position;

    }

    // set user info from raw SQL row
    setUserInfo(user_info, callback) {
        for(var key in user_info) {

            var val = user_info[ key ];

            if(key !== 'password') this.user_info[ key ] = val;
        }

        this.user_id = this.user_info.id;
        this.user_info.token = this.token;


        this.loadSettings(callback);
    }

    // get user info for own player
    getUserInfo() {
        // todo: filter things out i guess, maybe just build the array manually
        return this.user_info;
    }

    // get user info for other players
    getPublicUserInfo() {
        // todo: :)
    }

    // called when trying to authenticate
    doLogin(user, pass, callback) {
        mcec.log(`Player is requesting login: ${user}/${pass}`);

        var result = db.checkLogin(user, pass, (result, user_info) => {

            var error = "";
            if(!result) {
                error = "Invalid Credentials";
            } else {
                console.log("Creating session");
                db.createSession(user_info.id, this.token, this.ip, (result, reason) => {
                    if(!result) {
                        error = reason;

                        callback(false, false, error);
                        console.log("ERROR BITCH", reason);
                        return;
                    } else {
                        // successful login
                        this.setLoggedIn(user_info, callback);
                    }
                });
            }

            if(error !== "") callback(result, false, error);
        });

        return result;
    }

    setLoggedIn(user_info, callback) {
        this.setUserInfo(user_info, (() => {
            this.is_connected = true;
            return callback;
        })());
    }

    // send a packet like.. state=login ? state=playing? state=trading? idk
    syncState() {
        //mcec.log("Player state: " + this.state_names[ this.state ]);
        this.send('state', this.state);
    }

    // save my own settings into the db
    saveSettings() {
        if(this.user_id < 1) return;

        var save_list = this.setting_list;

        for(var name in save_list) {

            var item = this[ name ];
            var id = this.user_id;

            mcec.log(`Saving ${name} for ${this.user_id}`);
            console.log("Value:", item);

            db.saveUserSetting(id, name, item);
        }

        mcec.log("Saved settings for player");
    }

    // player disconnected and im unloading
    unload(callback) {
        if(this.user_id > 0) {
            this.app.loopConnectedPlayers((player) => {
                player.syncPosition();
            });

            this.saveSettings();
        }

        callback();
    }
}
module.exports = player;