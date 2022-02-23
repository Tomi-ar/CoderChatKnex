const { getData, saveData } = require('../modules/msjData');

const getService = async () => {
    let msjs = await getData()
    return msjs
}

const saveService = async (mensaje) => {
    let msj = await saveData(mensaje)
    return msj
}

module.exports = {
    getService,
    saveService
}