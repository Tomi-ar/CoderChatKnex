const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const dataBase = argv._[0]
let productDAO
let msjDAO

switch(dataBase){
    case 'mongodb':
        const ProductosMongo = require('./prodContainerMongoDB');
        const MensajesMongo = require('./MensjContainerMongoDB')
        productDAO = new ProductosMongo();
        msjDAO = new MensajesMongo();
        break;
    default:
        const ProductosMySQL = require('./prodContainerMySQL');
        const MensajesSQLite = require('./mensjContainerSQLite');
        productDAO = new ProductosMySQL();
        msjDAO = new MensajesSQLite();
        break
}

module.exports = {productDAO, msjDAO}

// class Algo {
//     LOGICA???
// }


// class Mongo extends Algo {
//     constructor(data){
//         super()
//         this.type = 'mongodb'
//     }
// }
// class Firebase extends Algo{
//     constructor(data){
//         super()
//         this.type = 'firebase'
//     }
// }
// class Otros extends Algo{
//     constructor(data){
//         super()
//         this.type = 'otros'
//     }
// }
// class MyDB {
//     createDB(data){
//         if(data.type == 'mongodb') return new Mongo(data)
//         if(data.type == 'firebase') return new Firebase(data)
//         if(data.type == 'otros') return new Otros(data)
//     }
// }
