const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

const TipoServico = sequelize.define("tipoServico", {
    //Campo obrigatório
    tipo_servico: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
{
    timestamps: false,
    tableName: "tipo_servicos"
});

module.exports = TipoServico;