var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sidd2412",
    database: "node_api"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL,age INT NOT NULL);";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});