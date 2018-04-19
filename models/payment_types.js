'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment_Types = sequelize.define('Payment_Types', {
    customerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER
  }, {
    timestamps: false, tableName: 'payment_types'});
  Payment_Types.associate = function(models) {
    // associations can be defined here
  };
  return Payment_Types;
};