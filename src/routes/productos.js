const { Router } = require('express');
const { getDataController, updateDataController, postDataController, deleteDataController, getDataControllerId } = require('../models/controllers/productController');

const router = new Router();

router.get("/", getDataController)

router.get("/:id", getDataControllerId)

router.post("/", postDataController)

router.put("/:id", updateDataController)

router.delete("/:id", deleteDataController)

module.exports = router;