const sequelize = require('sequelize');
const connect = require('../conexao');

const empresa = connect.define('empresa',{
    razaosocial:{
        type: sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: sequelize.STRING,
        allowNull: true,
    },
    perfil:{
        type: sequelize.INTEGER,
        allowNull: true,
    },
    idEmp: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      username:{
          type: sequelize.STRING,
          allowNull:false,
      }
})

empresa.sync({force:false}).then(() =>{console.log('Tabela Criada')}).catch(() => {console.log('Erro ao criar tabela')})
module.exports = empresa;