// Initiate the connection to MYSQL

// Dependancies
var mysql = require('mysql');

// Create mySQL connection using Sequelize
var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "rootpass",
    dialect: "mysql",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;