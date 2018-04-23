"use strict";

module.exports.displayProductDetails = (req, res, next) => {
  const { Product } = req.app.get("models");
  let id = req.params.id;
  console.log('REQ PARAM ID: ', id );
  Product.findOne({raw: true, where: {id}})
  .then(product => {
    res.render("product-details", { product });
  });
};
