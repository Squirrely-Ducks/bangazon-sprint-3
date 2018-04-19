"use strict";
module.exports = (sequelize, DataTypes) => {
  var ProductType = sequelize.define(
    "ProductType",
    {
      type: DataTypes.STRING
    },
    { timestamps: false, tableName: "productTypes" }
  );
  ProductType.associate = function(models) {
    // associations can be defined here
    ProductType.hasMany(models.Product, {
      foreignKey: "productTypeId",
      onDelete: "CASCADE"
    });
  };
  return ProductType;
};
