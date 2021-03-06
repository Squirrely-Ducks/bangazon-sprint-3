'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment_Types = sequelize.define('Payment_Types', {
    type: DataTypes.STRING,
    account_number: DataTypes.STRING
  }, { timestamps: true, tableName: "payment_types", paranoid: true});
  Payment_Types.associate = function (models) {
    // associations can be defined here
    Payment_Types.belongsTo(models.User, {
    foreignKey: "userId",
    })
  };
  return Payment_Types;
};

