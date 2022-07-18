var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'd3kf05c8vo5h5k',
    'fqhaalslgiyckj',
    '6f558e96e3e4656eba2c59256e4fecbe13fb852538a1b7daf1739bd410e8e158',
    {
        host: 'localhost',
        port: "5432",
        dialect: "postgres",
        dialectOptions: {
            ssl:{
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;