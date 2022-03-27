const productServices = require('../services/prodServ')

const prodServices = new productServices()

const getDataController = async (ctx) => { 
    let data = await prodServices.getService()
    if (data.length > 0) {    
        ctx.body = {
            status: 200,
            message: data
        }
    } else {
        ctx.body = {
            status: 204,
            message: 'No data found'
        }
    }
}

const getDataControllerId = async (ctx) => {
    let data = await prodServices.getServiceById(ctx.params.id)
    console.log(data);
    if (data.length > 0) {    
        ctx.body = {
            status: 200,
            message: data[0]
        }
    } else {
        ctx.body = {
            status: 204,
            message: 'No id found'
        }
    }
}

const postDataController = async (ctx) => {
    let data = await prodServices.saveService(ctx.request.body)
    ctx.body = {
        status: 200,
        message: `Nuevo producto creado: ${ctx.request.body.nombre}`
    }
}

const updateDataController = async (ctx) => {
    let id = ctx.params.id;
    let dato = ctx.request.body;
    await prodServices.updateService(id, dato);
    ctx.body = {
        status: 200,
        message: `Producto id ${id} actualizado`
    }
}

const deleteDataController = async (ctx) => {
    let id = ctx.params.id;
    await prodServices.deleteService(id);
    ctx.body = {
        status: 200,
        message: `Producto id ${id} eliminado`
    }
}

module.exports = {
    getDataController,
    getDataControllerId,
    postDataController,
    updateDataController,   
    deleteDataController,
}