const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Sidd2412",
    database: "node_api"
});

module.exports = pool.promise();
