DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (

);

CREATE TABLE employee (

);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);