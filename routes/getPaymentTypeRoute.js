const { Router } = require("express");
const router = Router();
const {getPaymentType}= require('../controllers/paymentTypeCtrl');

router.get("/getPaymentTypes/details:id", (req, res, next) => { 
    res.render("add-payment-type");
});

module.exports = router;