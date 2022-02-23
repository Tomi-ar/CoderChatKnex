const { getData, updateData, deleteData, saveData } = require('../modules/prodData')

const getService = async () => {
    let prods = await getData()
    return prods
}

const updateService = async (id, dato) => {
    let prod = await updateData(id, dato);
    return prod
}

const deleteService = async (id) => {
    let prod = await deleteData(id)
    return prod
}

const saveService = async (dataObj) => {
    let prod = await saveData(dataObj)
    return prod
}

module.exports = {
    getService,
    updateService,
    deleteService,
    saveService
}