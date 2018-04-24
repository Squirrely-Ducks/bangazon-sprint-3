const { Router } = require("express");
const router = Router();
// const express = require("express");
// const  app = express();
// const methodOverride = require("method-override");

const {addPaymentType, displayPaymentType, deletePaymentType}= require('../controllers/paymentTypeCtrl');

router.get("/payment-types", displayPaymentType);
router.get("/payment-type/add", (req, res, next) => { 
    res.render("add-payment-type");
});
router.post("/addPaymentTypes",addPaymentType);
router.post("/payment-types/delete/:id", deletePaymentType);




module.exports = router;