const { getService, updateService, deleteService, saveService } = require('../services/productServices')

const getDataController = async (req,res) => {
    let data = await getService();
    res.render("productos", {data: data});
}

const updateDataController = async (req,res) => {
    let id = req.params.id;
    let dato = req.body;
    await updateService(id, dato);
    res.send("Actualizado");
}

const deleteDataController = async (req,res) => {
    let id = req.params.id;
    await deleteService(id);
    res.send("Eliminado");
}

// para el socket.io
const emitProdController = async () => {
    let data = await getService();
    return data;
}

const saveProdController = async (dataObj) => {
    let data = await saveService(dataObj);
    return data;
}


module.exports = {
    getDataController,
    updateDataController,   
    deleteDataController,
    emitProdController,
    saveProdController
}