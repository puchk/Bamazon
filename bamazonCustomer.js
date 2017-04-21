var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '', 
	database: 'Bamazon' 
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
console.log("------------------------------------------");
  for (var i=0; i<res.length; i++) {
  	console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);

  }
console.log("------------------------------------------");
});



// connection.end();
