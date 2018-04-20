const { Router } = require("express");
const router = Router();
const {addPaymentType}= require('../controllers/paymentTypeCtrl');

router.get("/addPaymentTypes", (req, res, next) => { 
    res.render("add-payment-type");
});
router.post("/addPaymentTypes",addPaymentType)

module.exports = router;