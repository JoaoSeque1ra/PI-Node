var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'd27ue6hqakbqiu',
    'jqsflgimusijhy',
    'c4bd8da8290c7d3ecaf249874b1e2185c8092016997ae41374b74fe9cdb55adb',
    {
        host: 'postgres://jqsflgimusijhy:c4bd8da8290c7d3ecaf249874b1e2185c8092016997ae41374b74fe9cdb55adb@ec2-54-87-179-4.compute-1.amazonaws.com:5432/d27ue6hqakbqiu',
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