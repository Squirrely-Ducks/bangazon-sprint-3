"use strict";
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define(
    "Product",
    {
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      img: DataTypes.STRING,
      create_date: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    },
    { timestamps: false, tableName: "products" }
  );
  Product.associate = function(models) {
    // associations can be defined here
    // Product.belongsTo(models.Customer, {
    //   foreignKey: "customerId"
    // });
    // Product.belongsTo(models.Product_Type, {
    //   foreignKey: "productTypeId"
    // });
    // Product.hasMany(model.User_product, {
    //   foreign: "productId"
    // });
  };
  return Product;
};
