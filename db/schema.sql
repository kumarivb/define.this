DROP DATABASE definethis_db;

CREATE DATABASE definethis_db;
USE  definethis_db;

CREATE TABLE Entries (
  id INTEGER AUTO_INCREMENT,
  entry VARCHAR(50) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME,
  userId INT NOT NULL,
  context VARCHAR(420),
  contextLink VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE Definitions (
  id INTEGER AUTO_INCREMENT,
  definition VARCHAR(420) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME,
  userId INT,
  entryId INT NOT NULL,
  netRating INT NOT NULL,
  context VARCHAR(420),
  contextLink VARCHAR(200),
  PRIMARY KEY (id)
);
