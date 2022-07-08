const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

//chaves forasteira
const DescricaoServico = require("./DescricaoServico");
const Orcamento = require("./Orcamento");

const Contem = sequelize.define("contem", {
    //valores obrigatórios
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },
    selfGranted: Sequelize.BOOLEAN
}, 
{ 
    timestamps: false,
    tableName: "contem"
});

DescricaoServico.belongsToMany(Orcamento, { 
    through: "contem",
    foreignKey: 'descricao_servico_id'
});
Orcamento.belongsToMany(DescricaoServico, { 
    through: "contem",
    foreignKey: 'orcamento_id'
});

module.exports = Contem;