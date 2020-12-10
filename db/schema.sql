DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burgers (
    id INT NOT NULL auto_increment PRIMARY KEY
  , burger_name VARCHAR(50)
  , devoured BOOLEAN default false
);
