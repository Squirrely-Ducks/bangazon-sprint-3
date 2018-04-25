"use strict";

const { Router } = require("express");
const router = Router();
const { displayOrder } = require('../controllers/viewOrdersCtrl');
router.get("/view-orders", displayOrder);

module.exports= router;