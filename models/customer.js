'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, { timestamps: false, tableName: "customers"});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Payment_type,{
      foreignKey: "typeId"
    });

    Customer.hasMany(models.Order, {
      foreignKey: "customerId"
    });

    Customer.hasOne(models.Product, {
      foreignKey: "sellerId"
    });

    Customer.belongsToMany(models.Product,{
      foreignKey: "customerId",
      through: User_product
    })
  };
  return Customer;
};