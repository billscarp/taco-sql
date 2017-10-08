var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bill_s_7'
});
 
connection.connect();

module.exports = connection;