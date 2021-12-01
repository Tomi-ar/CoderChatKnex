const knex = require('../db');

class Productos {
    constructor() {
        this.products = [];
    }

    async getAll() {
        let data = [];
        await knex
            .select("id", "nombre", "precio", "thumb")
            .from("products")
            .then((res) => {
                console.log("Producto guardado con éxito");
                data = res;
            });
        // console.log(data);
        return data;
    }

    async getById(id) {
        let data = [];
        await knex
            .select("id", "nombre", "precio", "thumb")
            .from("products")
            .where("id", id)
            .then((res) => {
                data = res;
            });
        return data;
    }

    async save(product) {
        let data = [];
        await knex("products")
            .insert(product)
            .then((res) => {
                data = res;
            });
        return data;
    }
}

module.exports = Productos;