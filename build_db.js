'use strict';

let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');
let models = require('./models')


// const { orders } = require('./seeders/data/orders.json');
// const { payment_types } = require('./seeders/data/payment-types.json');

let createdb = (queryInterface) => {
    return models.sequelize.sync({ force: true })
        .then((queryInterface) => {
            return models.Orders
        })
        .then((queryInterface) => {
            return models.Payment_Types
        })
        .then(()=>{
            process.exit()
        })
}
createdb(queryInterface);