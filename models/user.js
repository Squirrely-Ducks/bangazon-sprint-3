'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {timestamps: false, tableName: 'users'});

  User.associate= (models) => {
    User.hasMany(models.Payment_Types, {
      foreignKey: "userId"
    });

    User.hasMany(models.Orders, {
      foreignKey: "userId"
    });

    User.hasMany(models.Product, {
      foreignKey: "userId"
    });

  };

  return User;
};
