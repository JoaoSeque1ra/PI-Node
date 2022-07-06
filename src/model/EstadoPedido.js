const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

const EstadoPedido = sequelize.define("estadoPedido", {
    //Campos obrigatórios
    estado: {
        type: Sequelize.STRING(50),
        allowNull: false,
    }
},
{
    timestamps: false,
    tableName: "estados"
});

module.exports = EstadoPedido;