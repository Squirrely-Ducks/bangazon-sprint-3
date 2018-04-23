"use strict";

const { Router } = require("express");
const router = Router();
const { displayProductDetails, searchProducts } = require('../controllers/productCtrl');


router.get("/product/details/:id", displayProductDetails);
router.post("/search", searchProducts)

module.exports = router;