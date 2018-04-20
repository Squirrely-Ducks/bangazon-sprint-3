"use strict";

module.exports.getAllProducts = (req, res, next) => {
  const { Product } = req.app.get("models");
  Product.findAll().then(prods => {
    res.status(200).json(prods);
  });
};

module.exports.getAllTypes = (req, res, next) => {
  const { Product_Type } = req.app.get("models");
  Product_Type.findAll().then(prods => {
    res.status(200).json(prods);
  });
};

module.exports.getOneProduct = (req, res, next) => {
  const { Product } = req.app.get("models");
  let id = req.params.id;
  Product.findById(id).then(prods => {
    res.status(200).json(prods);
  });
};

// module.exports.addSellerProduct = (req, res, next) => {
//   const { Product } = req.app.get("models");
//   Product.create({
// title: something goes here,
// description: something,
// img: ?,
// quantity : do we need to keep track of this number somewhere? i dunno its late

//   }).then(data => {
//     res.status(200);
//   });
// };
