const mysql = require('mysql');
 
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'cb1993',
    database:'mydata'
})

connection.connect();

module.exports = connection;