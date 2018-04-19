'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    create_date: DataTypes.STRING
  }, { timestamps: true, paranoid: true, tableName: "orders"});
  Orders.associate = function (models) {
    // associations can be defined here
    Orders.belongsTo(models.Payment_Types, {
    foreignKey: "paymentTypeId"
    })
    Orders.belongsTo(models.User, {
      foreignKey: "userId"
    })
    Orders.belongsToMany(models.Product, {
      through: "order_products"
    })
  };
  return Orders;
};

