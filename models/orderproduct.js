'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderProduct = sequelize.define('OrderProduct', {},
   {timestamps: true, tableName:"order_products"});
  OrderProduct.associate = function(models) {
    // OrderProduct.associate()
  };
  return OrderProduct;
};