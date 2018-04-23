"use strict";

const { Router } = require("express");
const router = Router();

const { myAccountView } = require('../controllers/account-viewCtrl');

router.get('/account', myAccountView);

router.get('/edit-account-info', (req, res) => {
  res.render('edit-account-info');
});
router.get('/view-orders', (req, res) => {
  res.render('view-orders');
});
router.get('/payment-types', (req, res) => {
  res.render('payment-types');
});

module.exports = router;