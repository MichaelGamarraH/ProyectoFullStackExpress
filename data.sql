create database nodepruebadb;
use nodepruebadb;
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed TINYINT DEFAULT 0  
);


INSERT INTO tasks(title) VALUES ('Tarea 1');
INSERT INTO tasks(title) VALUES ('Tarea 2');
select *from tasks;

DELIMITER $$

CREATE PROCEDURE usp_create_task (
    IN _title VARCHAR(100),
    IN _completed TINYINT
)
BEGIN
    INSERT INTO tasks (title, completed) VALUES (_title, _completed);
END $$

DELIMITER $$
CREATE PROCEDURE usp_update_task (
    IN _id INT,
    IN _title VARCHAR(100),
    IN _completed TINYINT
)
BEGIN
    UPDATE tasks 
    SET title = _title, completed = _completed
    WHERE id = _id;
END $$

CALL usp_create_task('Ejemplo 1', 1);
 
