const Mensajes = require('./mensjContainer')

const msj = new Mensajes();

const getData = async () => {
    await msj.getMensajes()
}

const saveData = async (mensaje) => {
    await msj.save(mensaje)
}

module.exports = {
    getData,
    saveData
}