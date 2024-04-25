-- Create the "ghosper_database" database
CREATE DATABASE IF NOT EXISTS ghosper_database;
USE ghosper_database;

-- Create the User table
CREATE TABLE User (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    PaymentMethod VARCHAR(50)
);

-- Create the Product table
CREATE TABLE Product (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    Brand VARCHAR(50)
);

-- Create the Purchase table
CREATE TABLE Purchase (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    User_ID INT NOT NULL,
    Product_ID INT NOT NULL,
    Quantity INT NOT NULL,
    PurchaseDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (User_ID) REFERENCES User(ID),
    FOREIGN KEY (Product_ID) REFERENCES Product(ID)
);

-- Create the Cart table
CREATE TABLE Cart (
    User_ID INT,
    Product_ID INT,
    Quantity INT NOT NULL,
    PRIMARY KEY (User_ID, Product_ID),
    FOREIGN KEY (User_ID) REFERENCES User(ID),
    FOREIGN KEY (Product_ID) REFERENCES Product(ID)
);

-- Create the Rating table
CREATE TABLE Rating (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    User_ID INT NOT NULL,
    Product_ID INT NOT NULL,
    Rating INT NOT NULL,
    Comment TEXT,
    FOREIGN KEY (User_ID) REFERENCES User(ID),
    FOREIGN KEY (Product_ID) REFERENCES Product(ID)
);

-- Create the Search table
CREATE TABLE Search (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Term VARCHAR(255) NOT NULL,
    SearchDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Results TEXT
);

-- Insert some initial records
INSERT INTO User (Username, Password, Email, Address, PaymentMethod) 
VALUES ('user1', 'password1', 'user1@example.com', '123 Street, City', 'Credit Card'),
       ('user2', 'password2', 'user2@example.com', '456 Avenue, City', 'PayPal');

INSERT INTO Product (Name, Description, Price, Stock, Brand) 
VALUES ('Shirt', 'Short-sleeved cotton shirt', 19.99, 50, 'Brand A'),
       ('Pants', 'Men\'s denim pants', 29.99, 30, 'Brand B');

INSERT INTO Purchase (User_ID, Product_ID, Quantity) 
VALUES (1, 1, 2),
       (2, 2, 1);


