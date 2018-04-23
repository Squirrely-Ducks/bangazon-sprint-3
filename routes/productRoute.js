"use strict";

const { Router } = require("express");
const router = Router();
const { displayProductDetails, displaySellList, deleteProduct } = require('../controllers/productCtrl');

router.get("/product/details/:id", displayProductDetails);

router.get("/products/list", displaySellList);
router.post("/products/delete/:id", deleteProduct);

module.exports = router;