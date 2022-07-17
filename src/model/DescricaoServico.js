const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

//chaves forasteira
const Servico = require("./Servico");

const DescricaoServico = sequelize.define("descricaoServico", {
    //Campos obrigatórios
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    }
},
{
    timestamps: false,
    tableName: "descricao_servicos"
});

//Um serviço tem várias descrições de serviços
Servico.hasMany(DescricaoServico, {
    foreignKey: 'servico_id'
});

DescricaoServico.belongsTo(Servico, {
    foreignKey: 'servico_id'
});

module.exports = DescricaoServico;