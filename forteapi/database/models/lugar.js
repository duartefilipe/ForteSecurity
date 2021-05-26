const sequelize = require('sequelize');
const conecta = require('../conexao');

const lugar = conecta.define('lugar',{
    lugar:{
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
        type: sequelize.INTEGER,
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
      }
    
})

lugar.sync({force:false}).then(() => console.log('Tabela criada')).catch(() => console.log('Erro ao criar tabela'))
module.exports = lugar;