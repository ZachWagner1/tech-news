const Sequelize = require('sequelize');

require('dotenv'),config();

// create connection to db
const sequelize = new Sequelize('tech_news_db', 'username', 'passowrd', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;