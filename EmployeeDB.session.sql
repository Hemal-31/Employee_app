USE employee_db;

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);
DESCRIBE employees;

INSERT INTO employees (id, name, age)
VALUES
(1, 'Rajnikanth', 60),
(2, 'Kamalhasan', 61),
(3, 'Vikram', 59),
(4,'Vijay',53),
(5, 'Ajith', 57);


SELECT*FROM employees;