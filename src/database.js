var mcec  = require('../src/mcec');
var mysql = require('mysql');

class database {
    constructor(app, callback) {
        this.app = app;
        this.db = mysql.createConnection({
            host     : 'mcec.io',
            user     : 'mcecreations',
            password : 'd00bie',
            database : 'game'
        });

        this.connect(callback);
    }

    connect(callback) {
        mcec.log("DB connecting ..");

        this.db.connect((err) => {
            if (err) {
                mcec.log('Error connecting: ' + err.stack);
                return;
            }

            mcec.log('DB connected as id ' + this.db.threadId);

            callback();
        });
    }

    disconnect() {
        this.db.end();
    }

    query(query, callback) {

        if(!callback) {
            return new Promise((resolve, reject) => {
                this.db.query(query, function (error, results, fields) {
                    if (error) reject(error);

                    resolve(results);
                });
            });
        } else {
            this.db.query(query, (error, results, fields) => {
                if (error) throw (error);

                callback(results)
            });
        }
    }

    escape(str) {
        return this.db.escape(str);
    }

    getUser(user_id) {

    }

    getOneForUser(table, col_name, col_val) {
        col_val = this.escape(col_val);

        var sql = `SELECT * FROM ${table} WHERE ${col_name} = ${col_val} LIMIT 1`;
        var result = this.query(sql);
    }

    getUserSetting(user_id, name, callback) {
        var col = this.escape(name);
        var sql = `SELECT * FROM user_settings WHERE setting = ${col} AND user_id = ${user_id} LIMIT 1`;
        var result = this.query(sql, (results) => {

            if(!results.length) callback(false);
            else {
                callback(results[0].value);
            }
        });
    }

    loadUserSetting(user_id, name, callback) {

        if(!callback) callback = ()=>{};

        user_id = parseInt(user_id, 10);

        this.getUserSetting(user_id, name, (val) => {
            name = this.escape(name);

            try {
                val = JSON.parse(val);
            } catch(e) {}

            callback(val);
        });
    }

    saveUserSetting(user_id, name, value, callback) {

        if(!callback) callback = ()=>{};

        if(typeof value == "object") {
            value = JSON.stringify(value);
        }

        user_id = parseInt(user_id, 10);
        value = this.escape(value);

        this.getUserSetting(user_id, name, (val) => {
            name = this.escape(name);

            if(val) {
                // do update
                var sql = `UPDATE user_settings SET value = ${value} WHERE setting = ${name} AND user_id = ${user_id} `;
            } else {

                var sql = `INSERT INTO user_settings VALUES(NULL, ${user_id}, ${name}, ${value}, NOW(), NOW());`;
            }

            this.query(sql, (results) => {
                if(results.length > 0) callback(results[0]);
                else callback(false);
            });
        });
    }

    checkLogin(user, pass, callback) {
        user = this.escape(user);
        pass = this.escape(pass);

        var sql = `SELECT * FROM users WHERE username=${user} AND password=${pass}`;

        this.query(sql, (results) => {
            if(results.length > 0) callback(true, results[0]);
            else callback(false);
        });
    }

    getLastSessionForUser(user, callback) {
        user = this.escape(user);

        var sql = `SELECT *, (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(updated)) as last_seen FROM user_sessions WHERE user_id = ${user} ORDER BY updated DESC LIMIT 1;`;

        this.query(sql, (results) => {
            if(results.length > 0) callback(true, results[0]);
            else callback(false);
        });
    }

    createSession(user, token, ip, callback) {
        this.getLastSessionForUser(user, (result, results) => {

            if(result) {
                var last_seen = results.last_seen;

                if(last_seen < (30)) {
                    callback(false, "That account is currently active");
                    return;
                }
            }

            user = this.escape(user);
            token = this.escape(token);
            ip = this.escape(ip);

            var server = this.app.server_id;
            var sql = `INSERT INTO user_sessions VALUES(NULL, ${user}, ${server}, ${token}, ${ip}, NOW(), NOW());`;

            console.log("Running SQL");

            this.query(sql, (results) => {
                console.log("CREATESESSION", results);

                var result = results.insertId;
                if(result) callback(true, result);
                else callback(false, "Error creating session");
            });
        });
    }

    refreshSession(token, callback) {
        if(!callback) callback = ()=>{};

        token = this.escape(token);

        var sql = `UPDATE user_sessions SET updated = NOW() WHERE session_id = ${token}`;

        console.log(`Refreshing session ${token}`);

        this.query(sql, (results) => {
            if(results.length > 0) callback(true, results[0]);
            else callback(false);
        });
    }

    handleTick(time) {
        var elapsed = time - this.last_tick;

        if(elapsed > 30 || !this.last_tick) {
            this.last_tick = time;

            if(!elapsed) return;

            mcec.log("[DB] Keep alive");
            this.query("SELECT 1;");
        }
    }
}
module.exports = database;