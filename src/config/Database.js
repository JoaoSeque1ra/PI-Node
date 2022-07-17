var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "pi3_teste_entrega",
    "postgres",
    "ola",
    {
        host: "localhost",
        port: "5432",
        dialect: "postgres",
    }
);

module.exports = sequelize;