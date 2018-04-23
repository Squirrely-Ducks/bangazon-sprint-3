'use strict';

const { Router } = require('express');
const router = Router();
const { myAccountView } = require('../controllers/account-viewCtrl');

router.get('/', (req, res, next) => {
  res.render('index');
});
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

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./sellProductRoute'));
router.use(require('./productRoute'));

// router.use(require('./foo'));
router.use(require('./addPaymentTypeRoute'))
module.exports = router;
