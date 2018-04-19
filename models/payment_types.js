'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment_Types = sequelize.define('Payment_Types', {
    type: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER
  }, { timestamps: false, tableName: "payment_types"});
  Payment_Types.associate = function (models) {
    // associations can be defined here
    Payment_Types.belongsTo(models.Customers, {
    foreignKey: "customerId",
    onDelete: "CASCADE"
    })
  };
  return Payment_Types;
};

