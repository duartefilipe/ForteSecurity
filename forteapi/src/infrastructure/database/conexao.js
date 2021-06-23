require('dotenv').config({ encoding: 'utf8' })

const sequelize = require('sequelize');

const conecta = new sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})

module.exports = conecta;
