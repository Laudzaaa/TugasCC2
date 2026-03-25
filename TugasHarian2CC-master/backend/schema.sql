-- SQL schema generated from current Sequelize model
-- Database: catatan
-- Table: notes

CREATE DATABASE IF NOT EXISTS catatan;
USE catatan;

CREATE TABLE IF NOT EXISTS notes (
    id INT NOT NULL AUTO_INCREMENT,
    judul VARCHAR(255),
    konten VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
