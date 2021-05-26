const { INTEGER } = require('sequelize');
const sequelize = require('sequelize');
const conecta = require('../conexao');

const usuario = conecta.define('usuario',{
    nome:{
        type: sequelize.STRING,
        
    },
    senha:{
        type: sequelize.STRING,
    },
    email:{
        type: sequelize.STRING,
    },
    perfil:{
        type: sequelize.INTEGER,
    },
    imagem:{
        type: sequelize.STRING,
        allowNull: true

    },
    idUsu: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
    token:{
        type: sequelize.STRING,
        allowNull:true
    }
})

usuario.sync({force:false}).then(() => console.log('Tabela criada')).catch(() => console.log('Erro ao criar tabela'))
module.exports = usuario;