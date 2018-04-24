"use strict";

const { Router } = require("express");
const router = Router();

const { myAccountView, editAccount, populateEditForm } = require('../controllers/account-viewCtrl');

router.get('/account', myAccountView);

router.get('/edit-account-info', populateEditForm);


router.get('/edit-account-info', (req, res) => {
  res.render('edit-account-info');
});
router.post("/edit", editAccount);

router.get('/view-orders', (req, res) => {
  res.render('view-orders');
});


module.exports = router;
