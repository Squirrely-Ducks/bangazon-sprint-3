"use strict";
module.exports = (sequelize, DataTypes) => {
  var Product_Type = sequelize.define(
    "Product_Type",
    {
      type: DataTypes.STRING
    },
    { timestamps: false, tableName: "product_types" }
  );
  Product_Type.associate = function(models) {
    // associations can be defined here
    Product_Type.hasMany(models.Product, {
      foreignKey: "productTypeId",
      onDelete: "CASCADE"
    });
  };
  return Product_Type;
};
