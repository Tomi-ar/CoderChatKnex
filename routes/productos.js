const express = require('express');
const { Router } = require('express');

const router = new Router();

router.get("/", (req, res) => {
    res.render("productos")
})

module.exports = router;