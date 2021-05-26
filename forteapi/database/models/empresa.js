const sequelize = require('sequelize');
const conecta = require('../conexao');

const empresa = conecta.define('empresa',{
    razao_social:{
        type: sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: sequelize.STRING,
        allowNull: false,
    },
    perfil:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    idEmp: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      }
    
})

empresa.sync({force:false}).then(() => console.log('Tabela criada')).catch(() => console.log('Erro ao criar tabela'))
module.exports = empresa;