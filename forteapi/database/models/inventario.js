const sequelize = require('sequelize');
const connect = require('../conexao');
const { INTEGER } = require('sequelize');

const inventario = connect.define('inventario',{
    processo:{
        type: sequelize.STRING,
        allowNull: false,
    },
    lugarInventario:{
        type: sequelize.STRING,
        allowNull: false,
    },
    nomeDado:{
        type: sequelize.STRING,
        allowNull: false,
    },
    nomeSistema:{
        type: sequelize.STRING,
        allowNull: false,
    },
    chave:{
        type: sequelize.STRING,
        allowNull: false,
    },
    finalidade:{
        type: sequelize.STRING,
        allowNull: false,
    },
    escopo:{
        type: sequelize.STRING,
        allowNull: false,
    },
    baseLegal:{
        type: sequelize.STRING,
        allowNull: false,
    },
    fundamentacao:{
        type: sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: sequelize.STRING,
        allowNull: false,
    },
    armazenamento:{
        type: sequelize.STRING,
        allowNull: false,
    },
    retencao:{
        type: sequelize.STRING,
        allowNull: false,
    },
    estrategiaRemocao:{
        type: sequelize.STRING,
        allowNull: false,
    },
    operadores:{
        type: sequelize.STRING,
        allowNull: false,
    },
    informacao_sensivel:{
        type: sequelize.STRING,
        allowNull: false,
    },
    transferencia_int_dados:{
        type: sequelize.STRING,
        allowNull: false,
    },
    transferencia_int_dados_pais:{
        type: sequelize.STRING,
        allowNull: false,
    },
    consentimento_obtido:{
        type: sequelize.STRING,
        allowNull: false,
    },
    link_consentimento:{
        type: sequelize.STRING,
        allowNull: false,
    },
    observacoes:{
        type: sequelize.STRING,
        allowNull: false,
    },
    data_registro:{
        type: sequelize.STRING,
        allowNull: false,
    },
    idLug:{
        type: sequelize.INTEGER,
        allowNull: false,
    },
    idInv: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      }

    })

    inventario.sync({force:false}).then(() => console.log('Tabela inventario criada')).catch(() => console.log('Erro ao criar tabela'))
    module.exports = inventario;