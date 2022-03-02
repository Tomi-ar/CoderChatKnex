const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const dataBase = argv._[0]

let productDAO
let msjDAO

switch(dataBase){
    case 'mongodb':
        const ProductContMongo = require('./prodContainerMongoDB');
        const MsjContMongo = require('./MensjContainerMongoDB')
        productDAO = new ProductContMongo();
        msjDAO = new MsjContMongo();
        break;
    default:
        const ProdcutContMySQL = require('./prodContainerMySQL');
        const MsjContSQLite = require('./mensjContainerSQLite');
        productDAO = new ProdcutContMySQL();
        msjDAO = new MsjContSQLite();
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
