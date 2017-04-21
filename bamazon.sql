CREATE DATABASE Bamazon;

USE Bamazon;

-- CREATE TABLE products (
-- 	item_id INT NOT NULL AUTO_INCREMENT,
--     product_name VARCHAR(45) NOT NULL,
--     department_name VARCHAR(45) NOT NULL,
--     price DECIMAL(10000,2) UNSIGNED NOT NULL,
--     stock_quantity INT(10000) UNSIGNED NOT NULL,
--     PRIMARY KEY(item_id)
-- );
CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price FLOAT(255,2) UNSIGNED NULL,
  stock_quantity INT(255) UNSIGNED NULL,
  PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Diplomacy", "Board Games", 23.11, 53),
	("Twilight Struggle", "Board Games", 34.01, 47),
	("Betrayal At House On The Hill", "Board Games", 31.49, 68),
	("Marmot Tungsten 3P Tent", "Camping & Hiking", 232.24, 4),
	("Sundome 3 Person Tent", "Camping & Hiking", 31.50, 47),
	("Therm-a-Rest Compressible Pillow", "Camping & Hiking", 19.95, 1),
	("HP Pavilion 22cwa Monitor", "Monitors", 99.99, 48),
	("Acer R240HY Monitor", "Monitors", 129.99, 0),
	("Taste of the Wild Dog Food", "Pet Supplies", 48.99,	23),
	("Blue Buffalo Freedom Dog Food", "Pet Supplies", 45.59, 2);

SELECT * FROM products;