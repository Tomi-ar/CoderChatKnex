const express = require("express")
const app = express();
const router = require("./src/routes/productos");
const { engine } = require('express-handlebars');
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

server.listen(port, () => {
    console.log("Server running on "+port);
})