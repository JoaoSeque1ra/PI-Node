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
    }
}, 
{ 
    timestamps: false,
    tableName: "contem"
});

DescricaoServico.hasMany(Contem, {
    foreignKey: 'descricao_servico_id'
})

Contem.belongsTo(DescricaoServico, {
    foreignKey: 'descricao_servico_id'
})

Orcamento.hasMany(Contem, {
    foreignKey: 'orcamento_id'
})

Contem.belongsTo(Orcamento, {
    foreignKey: 'orcamento_id'
})

// DescricaoServico.belongsToMany(Orcamento, { 
//     through: Contem,
//     foreignKey: 'descricao_servico_id'
// });

// Orcamento.belongsToMany(DescricaoServico, { 
//     through: Contem,
//     foreignKey: 'orcamento_id'
// });

module.exports = Contem;