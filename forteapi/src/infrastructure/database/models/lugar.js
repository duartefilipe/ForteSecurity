const sequelize = require('sequelize');
const connect = require('../conexao');
const { INTEGER } = require('sequelize');

const lugar = connect.define('lugar',{
    lugarNome:{
        type: sequelize.STRING,
        allowNull: false,
    },
    equipe:{
        type: sequelize.STRING,
        allowNull: false,
    },
    responsavel:{
        type: sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: sequelize.STRING,
        allowNull: false,
    },
    perfis:{
        type: sequelize.STRING,
        allowNull: false,
    },
    fonte_acesso:{
        type: sequelize.STRING,
        allowNull: false,
    },
    idLug: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      idEmp: {
        type: sequelize.INTEGER,
        allowNull:false,
      }
    
})

lugar.sync({force:false}).then(() => console.log('Tabela lugar criada')).catch(error => console.log('Erro ao criar tabela' + error))
module.exports = lugar;
