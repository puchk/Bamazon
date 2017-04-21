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
    message: "How many units would you like to buy?" 	
	}]);


        // ]).then(function(answer) {
        //     connection.query("SELECT * FROM products WHERE item_id = " + answer.selectItem, function(err, res) {
        //         if (err) throw err;
        //         console.log(res);
        //         start();
        //     });
        // console.log(answer.selectItem);
    });
  };



  start();
