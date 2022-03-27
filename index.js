const Koa = require('koa');
const koaBody = require('koa-body');
const productos = require('./src/routes/productos')

const app = new Koa()
const port = process.env.PORT || 3030;

app.use(koaBody())
app.use(productos.routes())

const server = app.listen(port, () => {
    console.log("Server running on PORT " + port);
})
server.on('error', error => console.log("Error en el servidor Koa"))