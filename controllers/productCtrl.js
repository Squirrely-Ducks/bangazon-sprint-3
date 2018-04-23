"use strict";

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports.displayProductDetails = (req, res, next) => {
  const { Product } = req.app.get("models");
  let id = req.params.id;
  console.log('REQ PARAM ID: ', id);
  Product.findOne({ raw: true, where: { id } })
    .then(product => {
      res.render("product-details", { product });
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
}
