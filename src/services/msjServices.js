// const { getData, saveData } = require('../modules/msjData');
const ProductDaos = require('../daos/msjDaos')

let instanceMsjService = null

class mensajeService {
    constructor(){
        this.MensajeDaos = new ProductDaos()
        this.value = Math.random()
    }
    //**************************** SINGLETON ****************************** */
    static getInstance() {
        if(!instanceMsjService){
            instanceMsjService = new productServices()
        }
        return instanceMsjService
    }
    //**************************** SINGLETON ****************************** */
    
    async getService(){
        let msjs = await getData()
        return msjs        
    }
    async saveService(mensaje){
        let msj = await saveData(mensaje)
        return msj
    }
}

module.exports = mensajeService