const express = require("express")
const app = express();
const router = require("./src/routes/productos");
const { engine } = require('express-handlebars');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Socket
require('./src/routes/socket')

// Server
const http = require("http")
const server = http.createServer(app)
const port = process.env.PORT || 3030;


app.use(express.static(__dirname+"./src/public"))

// Para trabajar con form
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/productos", router)
// Motores de plantillas >> Hbs
app.set("views", "./views")
app.set("view engine", "hbs")
app.engine(
    "hbs",
    engine({
        extname: "hbs",
        layoutsDir: __dirname+"/views/layouts",
        defaultLayout: "index",
        partialsDir: __dirname+"/views/partials",
    })
)

const graphSchema = buildSchema(`
    type Producto{
        id: String!,
        nombre: String!,
        precio: Float!,
        thumb: String!,
        role: String,
    }
    
    input ProductoInput{
        nombre: String!,
        precio: Float!,
        thumb: String!,
        role: String,
    }

    type Query{
        getAll: [Producto],
        getById(id: String!): Producto,
    }

    type Mutation{
        save(input: ProductoInput): Producto,
        updateId(id: String!, input: ProductoInput): Producto,
        deleteId(id: String!): Producto,
    }
`)

const MongoClient = require('./src/models/config/MongoDB')
const conectar = new MongoClient().connect
const products = require('./src/models/config/MongoSchema');


const root = {
    getAll: async () => {
        try {
            let data = await products.find({});
            return data;
        } catch (error) {
            console.log("Problemas con el get "+error);
        }
    },
    getById: async (id) => {
        try {
            let data = await products.find({_id: id});
            return data;
        } catch (error) {
            console.log("ID no encontrado "+error);
        }
    },
    save: async (product) => {
        try {
            let newProd = {
                nombre: product.nombre,
                precio: product.precio,
                thumb: product.thumb
            };
            let data = await new products(newProd).save()
            return data;
        } catch (error) {
            console.log("Problemas con el save "+error);
        }
    },
    deleteId: async (id) => {
        try {
            let data = await products.findOneAndRemove({_id: id});
            return data;
        } catch (error) {
            console.log("Problemas con el delete "+error);
        }
    },
    updateId: async (id, product) => {
        try {
            let data = products.findOneAndUpdate({_id: id}, product)
            return data;
        } catch (error) {
            console.log("Problemas con el update "+error);
        }
    }
}

app.use('/graphql', graphqlHTTP({
    schema: graphSchema,
    rootValue: root,
    graphiql: true,
}))

server.listen(port, () => {
    console.log("Server running on "+port);
})


//**************QUERIES */
// query{
//     getAll{
//         nombre
//         id
//     }
// }