var mysql = require('mysql');
var inquirer = require('inquirer');

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


var start = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    inquirer.prompt([{
      name: "selectItem",
      type: "rawlist",
      choices: function() {
        var choicesArray = [];
        console.log("------------------------------------------");
        for (var i = 0; i < res.length; i++) {
          choicesArray.push(res[i].product_name);
          console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
        }
        console.log("------------------------------------------");

        return choicesArray;
      },
      message: "Select an item to purchase"
    }, {
      name: "quantity",
      type: "input",

      message: "How many units would you like to buy?",
      //   validate: function(input) {
      //   	console.log(parseInt(input));
      // }
    }]).then(function(answer) {
      var chosenItem;
      for (var i = 0; i < res.length; i++) {
        if (res[i].product_name === answer.selectItem) {
          chosenItem = res[i];
        }
      }
      if (chosenItem.stock_quantity >= answer.quantity) {
      	var newQuantity = chosenItem.stock_quantity - answer.quantity;
     		console.log(answer.quantity, "items added to your cart.");
     		console.log("Your total for ("+answer.quantity+") "+answer.selectItem+" is $"+answer.quantity * chosenItem.price);
     		console.log("AAAAAA: "+chosenItem.stock_quantity);
     		connection.query("UPDATE products SET ? WHERE ?", [{
     			stock_quantity: newQuantity
     		}, {
     			item_id: chosenItem.item_id
     		}]);
    	}
    	else {
    		console.log("Not enough in stock. "+ chosenItem.stock_quantity + " available to purchase.");
    	}
     	console.log("Automatically redirecting to home screen.");
    	setTimeout(start, 4500);
    });

  });
};

start();
