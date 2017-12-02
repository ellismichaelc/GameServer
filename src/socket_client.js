var THREE = require('../game-client/js/build/three.min');
var mcec = require('../src/mcec');

class socket_client {
    constructor(app, socket) {
        this.app = app;
        this.socket = socket;

        this.ip = socket.request.connection.remoteAddress;

        this.bindDefaults();
    }

    bindDefaults() {
        // socket defaults
        this.on('latency',       (time, callback)    => { this.handleLatency(time, callback); });
        this.on('disconnect',    (reason)            => { this.handleDisconnect(reason); });
        this.on('error',         (error)             => { this.handleError(error); });
    }

    send(event, data, callback) {
        this.socket.emit(event, data, callback);
    }

    on(event, callback) {
        this.socket.on(event, callback);
    }
}
module.exports = socket_client;