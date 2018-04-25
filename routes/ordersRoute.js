"use strict";

const { Router } = require("express");
const router = Router();
const { viewShoppingCart, cancelOrder, selectPaymentType, addPaymentToOrder } = require('../controllers/ordersCtrl');

router.get('/cart', viewShoppingCart);
router.post("/cart/delete", cancelOrder);
router.get("/cart/selectPayment", selectPaymentType);
router.post("/cart/selectPayment/:id", addPaymentToOrder);


module.exports = router;