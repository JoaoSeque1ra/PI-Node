var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "d41qisifaueaqe",
    "d41qisifaueaqe",
    "f84d6a7a5002caab6474d509eeecf199e2fbea58c5ef6445d777fd530afa98ea",
    {
        host: "ec2-99-80-170-190.eu-west-1.compute.amazonaws.com",
        port: "5432",
        dialect: "postgres",
        dialectOptions: {
            ssl:{
                rejectUnauthorized:false
            }
        }
    }
);

module.exports = sequelize;