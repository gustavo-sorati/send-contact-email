const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.DATABASE, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}