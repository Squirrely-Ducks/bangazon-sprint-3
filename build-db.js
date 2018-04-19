"use strict";

let models = require("./models");
let { product_types } = require("./seeders/data/product_types");
let { products } = require("./seeders/data/products");
let { orders } = require("./seeders/data/orders");
let { payment_types } = require("./seeders/data/payment_types");
let { users } = require("./seeders/data/user");
// let { user_products } = require("./seeders/data/user_products");





models.sequelize
  .sync({ force: true })
  .then((queryInterface) => {
    return models.User.bulkCreate(users)
  })
  .then(() => {
    return models.Product_Type.bulkCreate(product_types);
  })
  .then(() => {
    return models.Product.bulkCreate(products);
  })
  .then((queryInterface) => {
    return models.Payment_Types.bulkCreate(payment_types)
  })
  .then((queryInterface) => {
    return models.Orders.bulkCreate(orders)
  })
  .then(() => {
    process.exit();
  });
