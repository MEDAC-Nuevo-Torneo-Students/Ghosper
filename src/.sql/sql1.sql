-- Create the "ghosper_database" database
CREATE DATABASE IF NOT EXISTS ghosper_database;
USE ghosper_database;

create table Usuario (
	nombre VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña CHAR(60) NOT NULL,
    telefono VARCHAR(255)
);
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

select * from user;