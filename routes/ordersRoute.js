"use strict";

const { Router } = require("express");
const router = Router();
const { viewShoppingCart, cancelOrder, removeItem } = require('../controllers/ordersCtrl');

router.get('/cart', viewShoppingCart);
router.post("/cart/delete", cancelOrder);
router.post("/cart/removeItem/:id", removeItem);

module.exports = router;