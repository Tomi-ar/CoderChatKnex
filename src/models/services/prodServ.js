const ProductosMongo = require("../containers/prodContMongoDB")

let instanceProdService = []

class productServices {
    constructor() {
        this.ProductDaos = new ProductosMongo()
        this.value = Math.random()
    }
    //**************************** SINGLETON ****************************** */
    static getInstance() {
        if(!instanceProdService){
            instanceProdService = new productServices()
        }
        return instanceProdService
    }
    //**************************** SINGLETON ****************************** */

    async getService(){
        let prods = await this.ProductDaos.getAll()
        return prods    
    }
    async updateService(id, dato){
        let prod = await this.ProductDaos.updateId(id, dato);
        return prod
    }
    
    async deleteService(id){
        let prod = await this.ProductDaos.deleteId(id)
        return prod
    }
    
    async saveService(dataObj){
        let prod = await this.ProductDaos.save(dataObj)
        return prod
    }
    async getServiceById(id){
        let prod
        if(id){
            prod = await this.ProductDaos.getById(id)
        } else {
            prod = await this.ProductDaos.getAll()
        }
        return prod
    }
}


module.exports = productServices