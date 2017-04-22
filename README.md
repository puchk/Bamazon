## HW - {Bamazon}

### Overview
 - In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory

### Instructions/Requirements
 - Create a MySQL Database called Bamazon
 - Then create a Table inside of that database called products.
 - The products should have each of the following columns:
     + item_id
     + product_name
     + department_name
     + price
     + stock_quantity
 - Populate the database with around 10 different products
 - Then create a Node application called bamazonCustomer.js
 - Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
 - The app should then prompt users with two messages:
     + The first should ask them the ID of the product they would like to buy.
     + The second message should ask how many units of the product they would like to buy.
 - Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
 - If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
 - However, if your store does have enough of the product, you should fulfill the customer's order.
     + This means updating the SQL database to reflect the remaining quantity.
     + Once the update goes through, show the customer the total cost of their purchase.
     
### Using this App
Set up MySQL  
![mysql](https://cloud.githubusercontent.com/assets/22807914/25300114/f2ea7a7c-26bc-11e7-90a0-e6a83d4a2593.PNG)  
Access the JS file through Node  
![accessfile](https://cloud.githubusercontent.com/assets/22807914/25300169/161a64c0-26be-11e7-9d6f-421fde0c81b9.PNG)  
Which will display a table of the id, product name, and price and will prompt the user to select an item to purchase  
![start](https://cloud.githubusercontent.com/assets/22807914/25300192/817919be-26be-11e7-9026-2281240ee211.PNG)  
After user chooses an item, they are prompted for the quantity  
![nextquestion](https://cloud.githubusercontent.com/assets/22807914/25300211/cc0a00c4-26be-11e7-8732-0497a63e6e1f.PNG)  
If there is enough product in stock, you purchase the items and are redirected to the home screen after a few seconds  
![addtocart](https://cloud.githubusercontent.com/assets/22807914/25300237/653963de-26bf-11e7-9014-a61b96f58084.PNG)  
If there is quantity requested exceeds the amount in stock, the items will not be purchased  
![notenough](https://cloud.githubusercontent.com/assets/22807914/25300255/b6cc455e-26bf-11e7-8c43-d1caf8580ebe.PNG)





      
### Technologies Used
 - JS
 - Node
 - MySQL

