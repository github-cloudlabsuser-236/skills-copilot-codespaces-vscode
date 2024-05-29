-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert 5 products
INSERT INTO products (name, price) VALUES
    ('Apple iPhone 11', 699.99),
    ('Samsung Galaxy S20', 899.99),
    ('Google Pixel 4', 799.99),
    ('OnePlus 7T', 599.99),
    ('Huawei P30 Pro', 799.99);

-- Query all products
SELECT * FROM products;