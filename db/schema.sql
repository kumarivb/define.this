CREATE DATABASE definethis_db;

CREATE TABLE Entries (
  id INTEGER AUTO_INCREMENT,
  entry VARCHAR(50),
  createdAt DATETIME,
  updatedAt DATETIME,
  userId INT,
  context VARCHAR(420),
  contextLink VARCHAR(200)
);

   


