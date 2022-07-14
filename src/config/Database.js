var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "df0ehl0ofju1b4",
    "zayoiikmtnxnqg",
    "4b221b3d3bbcd1a764c6fe910e5e74b9c3082687ffe1b2822c73657a6b9f100e   ",
    {
        host: "ec2-34-247-72-29.eu-west-1.compute.amazonaws.com",
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