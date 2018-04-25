"use strict";

const { Router } = require("express");
const router = Router();
const { displayOrder, displayProductsOnOrder } = require('../controllers/viewOrdersCtrl');
router.get("/view-orders", displayOrder);
router.get("/view-orders/products/:id", displayProductsOnOrder);

module.exports= router;