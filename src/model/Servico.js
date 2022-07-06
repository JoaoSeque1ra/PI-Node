const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

//chaves forasteira
const TipoServico = require("./TipoServico");

const Servico = sequelize.define("servico", {
    //Campo obrigatório
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
{
    timestamps: false,
    tableName: "servicos"
});

//Um tipo de serviço tem vários serviços
TipoServico.hasMany(Servico, {
    foreignKey: 'tipo_servico_id'
});

module.exports = Servico;