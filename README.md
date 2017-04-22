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
      
### Technologies Used
 - JS
 - Node
 - MySQL

