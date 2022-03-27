const Router = require('koa-router');
const { getDataController, updateDataController, postDataController, deleteDataController, getDataControllerId } = require('../models/controller/prodControl');

const router = new Router({
    prefix: '/productos'
});

// **** ACA IRIAN LAS RUTAS
router.get("/", getDataController)

router.get("/:id", getDataControllerId)

router.post("/", postDataController)

router.put("/:id", updateDataController)

router.delete("/:id", deleteDataController)

module.exports = router;