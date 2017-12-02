var mcec = require('../shared/mcec');
import io from "socket.io-client";

class sockets {
    constructor() {
        this.server_ip = mcec.config('server_ip');
        this.server_port = mcec.config('server_port');

        this.callbacks = [];
    }

    // unused events: flush, drain, upgradeError, upgrade
    connect() {
        this.socket = io(this.server_ip + ":" + this.server_port);

        mcec.log("Initializing socket");

        // this.socket.on('connect',       (data) => { this.fire('connect',    data); });
        // this.socket.on('event',         (data) => { this.fire('event',      data); });
        // this.socket.on('error',         (data) => { this.fire('error',      data); });
        // this.socket.on('disconnect',    (data) => { this.fire('disconnect', data); });
        // this.socket.on('ping',          (data) => { this.fire('ping',       data); });
        // this.socket.on('pong',          (data) => { this.fire('pong',       data); });

        this.bind('connect');
        this.bind('event');
        this.bind('error');
        this.bind('disconnect');
        this.bind('ping');
        this.bind('pong');
    }

    fire(event, data) {
        mcec.log("[IO] Firing event: " + event);

        if(typeof this.callbacks[ event ] == "undefined") return;

        for(var i = 0; i < this.callbacks[ event ].length; i++) {
            var callback = this.callbacks[ event ][ i ];

            callback(data);
        }

    }

    bind(event, callback) {
        mcec.log("[IO] Binding event " + event);

        if(typeof this.callbacks[ event ] == "undefined") {
            this.callbacks[ event ] = [];

            this.socket.on(event, (data) => {
                this.fire(event, data);
            });
        }

        if(callback) this.callbacks[ event ].push(callback);
    }

    send(event, data, callback) {
        mcec.log("[IO] Sending event (" + event + ") = " + data);

        this.socket.emit(event, data, callback);
    }
}

module.exports = new sockets();