const Sequelize = require("sequelize");
const sequelize = require("../config/Database");

//chaves forasteiras
const EstadoPedido = require("./EstadoPedido");
const Cliente = require("./Cliente");

const Orcamento = sequelize.define("orcamento", {
    //valores da tabela orçamento OBRIGATÓRIOS
    valor: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },
    data_orcamento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
},
{
    timestamps: false,
    tableName: "orcamentos"
});

//Um clientes tem vários orçamentos
Cliente.hasMany(Orcamento, {
    foreignKey: 'cliente_id'
});

//Um estado tem vários orçamentos
EstadoPedido.hasMany(Orcamento, {
    foreignKey: 'estado_pedido_id'
});

module.exports = Orcamento;