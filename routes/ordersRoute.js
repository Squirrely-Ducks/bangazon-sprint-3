"use strict";

const { Router } = require("express");
const router = Router();
const { viewShoppingCart, cancelOrder } = require('../controllers/ordersCtrl');

router.get('/cart', viewShoppingCart);
router.post("/cart/delete", cancelOrder);

module.exports = router;