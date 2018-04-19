'use strict';

let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

const { orders } = require('./seeders/data/orders.json');
const { payment_types } = require('./seeders/data/payment-types.json');

let createdb = (queryInterface) => {
    const app = require('./app');
    const models = app.get('models');
    return models.sequelize.sync({ force: true })
        .then((queryInterface) => {
            return models.Orders.bulkCreate(orders)
        })
        .then((queryInterface) => {
            return models.Payment_Types.bulkCreate(payment_types)
        })
}
createdb(queryInterface);