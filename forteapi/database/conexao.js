const sequelize = require('sequelize');

const conecta = new sequelize('forte', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conecta;