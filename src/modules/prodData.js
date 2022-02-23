const Productos = require('./prodContainer')

const prod = new Productos();

const getData = async () => {
    await prod.getAll()
}

const updateData = async (id, dato) => {
    await prod.updateId(id, dato)
}

const deleteData = async (id) => {
    await prod.deleteId(id)
}

const saveData = async (dataObj) => {
    await prod.save(dataObj)
}

module.exports = {
    getData,
    updateData,
    deleteData,
    saveData
}