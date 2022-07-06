var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "PI3",
    "postgres",
    "R7220810",
    {
        host: "localhost",
        port: "5432",
        dialect: "postgres"
    }
);

module.exports = sequelize;