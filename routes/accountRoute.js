"use strict";

const { Router } = require("express");
const router = Router();

const { myAccountView, editAccount } = require('../controllers/account-viewCtrl');

router.get('/account', myAccountView);

router.get('/edit-account-info', (req, res) => {
  res.render('edit-account-info');
});
router.post("/edit", editAccount);

router.get('/view-orders', (req, res) => {
  res.render('view-orders');
});


module.exports = router;
