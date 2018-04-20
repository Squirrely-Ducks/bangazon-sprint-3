"use strict";

const { Router } = require("express");
const router = Router();

const {
  getAllProducts,
  getOneProduct,
  getAllTypes,
  getUserProducts,
  addSellerProduct,
  deleteProduct
} = require("../controllers/productCtrl.js");

// gets all products. figured might be useful
router.get("/product", getAllProducts);
// gets all types. might be useful
router.get("/types", getAllTypes);
// // able to view one product
router.get("/product/:id", getOneProduct);
// // getsproducts from order_products for cart?
// router.get("/mycart", getUserProducts);
// // added this route cause probs need it. couldnt think where else it would go. I dunno?
// router.post("/sell",  addSellerProduct);
// route for deleting product?
// router.get('/deleteproduct', deleteProduct)

module.exports = router;
