const mongosee = require("mongoose");

config = {
    name: "/CoderHouse-clase40",
    collection: "productos-clase40",
    host: "mongodb://localhost:27017"
}

class MongoClient{
    constructor(){
        // this.connect = false
        this.client = mongosee
    }

    async connect(){
        try {
            this.client.connect(config.host+config.name, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log("MongoDB conectado");
        } catch (error) {
            throw "Error al conectar con MongoDB"
        }
    }

    async disconnect(){
        try {
            await this.client.close()
            console.log("MongoDB desconectado");
        } catch (error) {
            throw "Error al desconectar con MongoDB"
        }
    }
}

module.exports = MongoClient;