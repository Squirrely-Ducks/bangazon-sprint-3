const { Router } = require("express");
const router = Router();
const {addPaymentType, displayPaymentType}= require('../controllers/paymentTypeCtrl');

router.get("/payment-types", displayPaymentType);
router.get("/payment-type/add", (req, res, next) => { 
    res.render("add-payment-type");
});
router.post("/addPaymentTypes",addPaymentType);

module.exports = router;