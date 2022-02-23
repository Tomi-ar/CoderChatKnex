const { Router } = require('express');
const { getDataController, updateDataController, deleteDataController } = require('../controllers/productController');

const router = new Router();

router.get("/", getDataController)

router.put("/:id", updateDataController)

router.delete("/:id", deleteDataController)

module.exports = router;