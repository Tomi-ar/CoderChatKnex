const knex = require('../config/knexSQLite');
let instanceMsjSQLite = null;

class MensajesSQLite {
    constructor() {
        this.mensajes = [];
        this.value = Math.random();
    }

    //**************************** SINGLETON ****************************** */
    static getInstance() {
        if(!instanceMsjSQLite){
            instanceMsjSQLite = new Mensajes()
        }
        return instanceMsjSQLite
    }
    //**************************** SINGLETON ****************************** */

    async getMensajes() {
        let data = [];
        await knex
            .select("email", "text", "created_at")
            .from("messages")
            .then((res) => {
                data = res;
            });
        return data;
    }

    async save(mensaje) {
        await knex("messages").insert(mensaje);
    }
}

module.exports = MensajesSQLite;