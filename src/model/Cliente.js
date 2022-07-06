const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

const Cliente = sequelize.define("cliente", {
    //Campos obrigatórios
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    //Campo opcional
    empresa: Sequelize.STRING,
    //Campo adicionado na dashboard apenas
    morada: Sequelize.STRING,
    codigo_postal: Sequelize.STRING(8),
    localidade: Sequelize.STRING(50),
    numero_fiscal: Sequelize.INTEGER
},
{
    timestamps: false,
    tableName: "clientes"
});

module.exports = Cliente;