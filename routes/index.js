'use strict';

const { Router } = require('express');
const router = Router();


router.get('/', (req, res, next) => {
  res.render('index');
});


// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./sellProductRoute'));
router.use(require('./productRoute'));
router.use(require('./accountRoute'));
router.use(require('./addPaymentTypeRoute'))
module.exports = router;
