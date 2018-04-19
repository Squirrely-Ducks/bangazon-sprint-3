'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    create_date: DataTypes.INTEGER
  }, { timestamps: false, tableName: "orders"});
  Orders.associate = function (models) {
    // associations can be defined here
    Orders.belongsTo(models.Payment_Types, {
    foreignKey: "paymentTypeId",
    onDelete: "CASCADE"
    })
    Orders.belongsTo(models.Customer, {
      foreignKey: "customerId",
      onDelete: "CASCADE"
    })
  };
  return Orders;
};

