const mysql = require('mysql');

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'contraseña',
    database: 'ghosper',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});



module.exports = connection;