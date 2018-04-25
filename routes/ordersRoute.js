"use strict";

const { Router } = require("express");
const router = Router();
<<<<<<< HEAD
const { viewShoppingCart, cancelOrder, removeItem } = require('../controllers/ordersCtrl');

router.get('/cart', viewShoppingCart);
router.post("/cart/delete", cancelOrder);
router.post("/cart/removeItem/:id", removeItem);
=======
const { viewShoppingCart, cancelOrder, selectPaymentType, addPaymentToOrder } = require('../controllers/ordersCtrl');

router.get('/cart', viewShoppingCart);
router.post("/cart/delete", cancelOrder);
router.get("/cart/selectPayment", selectPaymentType);
router.post("/cart/selectPayment/:id", addPaymentToOrder);

>>>>>>> jbCompleteOrder

module.exports = router;