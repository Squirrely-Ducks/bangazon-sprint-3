"use strict";

const { Router } = require("express");
const router = Router();
const { viewShoppingCart } = require('../controllers/ordersCtrl');

router.get('/cart', viewShoppingCart);

module.exports = router;