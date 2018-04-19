"use strict";

let models = require("./models");

models.sequelize
  .sync({ force: true })
  .then(() => {
    return models.Product;
  })
  .then(() => {
    return models.Product_Type;
  })
  .then(() => {
    process.exit();
  });
