import Player from '../src/player.js';

class players {
    constructor(scene) {
        this.scene = scene;

        this.players = [];

        this.myplayer = this.addMyPlayer();
        //this.myplayer = false;
    }

    addPlayer (defaults) {
        var player = new Player(this.scene, 'player', defaults);
        this.players.push(player);

        player.loadDefaults(defaults);

        return player;
    }

    __OLD_addPlayer (id, options) {
        var player = new Player(this.scene, id, options);
        this.players.push(player);

        return player;
    }

    addMyPlayer (defaults) {
        var players = this;
        var setCamera = function(mesh) {
            players.setPlayerCamera(mesh);
        };
        var player = this.addPlayer(defaults);//, {callback: setCamera});

        return player;
    }

    handleUpdate () {
        for(var i=0; i<this.players.length; i++) {
            mcec.log("UPDATING PLAYER " + i);
            this.players[i].handleUpdate();
        }
    }

    getMyPlayer () {
        return this.myplayer;
    }

    setPlayerCamera (mesh) {
        mcec.log("Setting player camera");
        mesh.add(this.camera.get());
        this.scene.setControls();
    }

    getPlayer(id) {
        for(var i=0; i<this.players.length; i++) {
            var player = this.players[i];

            if(player.user_info.id == id) return player;
        }
    }

    removePlayer(id) {
        for(var i=0; i<this.players.length; i++) {
            var player = this.players[i];

            if(player.user_info.id == id) {
                player.unload();
                this.players.splice(i, 1);

                return true;
            }
        }
    }

}

module.exports = players;