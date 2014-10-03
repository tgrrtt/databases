CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL,
  username VARCHAR(140),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL,
  roomname VARCHAR(140),
  PRIMARY KEY (id)
);



CREATE TABLE messages (
  id INT NOT NULL,
  text VARCHAR(140),
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (room_id) REFERENCES rooms (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




