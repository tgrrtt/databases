DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(140),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(140),
  PRIMARY KEY (id)
);



CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(140),
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (room_id) REFERENCES rooms (id)
);


INSERT INTO chat.users (username) VALUES ("Tyler"),("Sebastian");

INSERT INTO chat.rooms (roomname) VALUES ("main"), ("/b"), ("Hello");


INSERT INTO chat.messages (text,user_id,room_id)
VALUES ("Men like you can never change!",
		(SELECT id FROM chat.users WHERE username = "Tyler"),
		(SELECT id FROM chat.rooms WHERE roomname = "Lobby"));

SELECT * FROM chat.messages;