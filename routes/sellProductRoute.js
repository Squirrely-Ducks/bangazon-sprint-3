"use strict";

const { Router } = require("express");
const router = Router();
const { displaySellProduct, addSellProduct } = require('../controllers/sellProductCtrl');

router.get("/sell", displaySellProduct);
router.post("/sell", addSellProduct);

module.exports = router;