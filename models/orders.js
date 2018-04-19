'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    customerId: DataTypes.INTEGER,
    paymentTypeId: DataTypes.INTEGER,
    create_date: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'orders'});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.paymentTypes, {
      foreignKey: "paymentTypeId",
      onDelete: "CASCADE"
    })
  };
  return Orders;
};