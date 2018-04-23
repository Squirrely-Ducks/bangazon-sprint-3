"use strict";

const { Router } = require("express");
const router = Router();
const { displayProductDetails } = require('../controllers/productCtrl');

router.get("/product/details/:id", displayProductDetails);

module.exports = router;