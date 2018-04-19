"use strict";

let models = require("./models");
let { product_types } = require("./seeders/data/product_types");
let { products } = require("./seeders/data/products");

models.sequelize
  .sync({ force: true })
  .then(() => {
    return models.Product.bulkCreate(products);
  })
  .then(() => {
    return models.Product_Type.bulkCreate(product_types);
  })
  .then(() => {
    process.exit();
  });
