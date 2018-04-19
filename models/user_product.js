'use strict';
module.exports = (sequelize, DataTypes) => {
  var User_product = sequelize.define('User_product', {
    liked: DataTypes.BOOLEAN
  }, {});
  User_product.associate = function(models) {
      liked: DataTypes.BOOLEAN      
  };
  return User_product;
};