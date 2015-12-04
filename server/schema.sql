

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` VARCHAR(15) NULL DEFAULT NULL,
  `roomname` VARCHAR(15) NULL DEFAULT 'lobby',
  `text` VARCHAR(144) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE users (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

