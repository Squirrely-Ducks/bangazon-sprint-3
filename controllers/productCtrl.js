"use strict";

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports.displayProductDetails = (req, res, next) => {
  const { Product } = req.app.get("models");
  let id = req.params.id;
  Product.findOne({ raw: true, where: { id } })
    .then(product => {
      res.render("product-details", { product });
    });
};

module.exports.displaySellList = (req, res, next) => {
  let userId = req.app.get("user").id;
  let { Product } = req.app.get("models");
  Product.findAll({raw: true, where: {userId}})
  .then(products => {
    res.render("my-products", { products });
  });
};

module.exports.deleteProduct = (req, res, next) => {
  let { Product } = req.app.get("models");
  let { id } = req.params;
  Product.destroy({where: {id}})
  .then(() => {
    res.redirect("/products/list");
  });
};

// method that grabs search input and gets back products from db
module.exports.searchProducts = (req, res, next) => {
  let { Product } = req.app.get('models')
  let { search } = req.body
  Product.findAll({
    where: {
      title: {
        [Op.like]: `%${search}`
      }
    }
  })
  .then(product => {
    res.render("search-details", { product })
  })
};

