DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages 
(
  /* Describe your table here.*/
  message_id int(10) PRIMARY KEY AUTO_INCREMENT,
  message_text varchar(140),
  user_id varchar(50) NOT NULL,
  room_id varchar(50) NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users 
(
  uid int(3) PRIMARY KEY,
  username varchar(10) NOT NULL unique,
  text_color varchar(6)
);

CREATE TABLE rooms 
(
  rid int(2) PRIMARY KEY,
  roomname varchar(7) NOT NULL unique
)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

