const { getService, saveService } = require('../services/msjServices')

// para el socket.io
const emitMsjController = async () => {
    let data = await getService();
    return data;
}

const saveMsjController = async (mensaje) => {
    let data = await saveService(mensaje);
    return data;
}

module.exports = {
    emitMsjController,
    saveMsjController
}