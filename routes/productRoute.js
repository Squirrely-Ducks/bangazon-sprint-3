"use strict";

const { Router } = require("express");
const router = Router();
const { displayProductDetails, displaySellList, deleteProduct, searchProducts, checkOrder } = require('../controllers/productCtrl');

router.get("/product/details/:id", displayProductDetails);
router.post("/search", searchProducts)
router.get("/products/list", displaySellList);
router.post("/products/delete/:id", deleteProduct);
router.post("/search/add/:id", checkOrder)

module.exports = router;