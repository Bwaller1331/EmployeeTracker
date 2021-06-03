 DROP DATABASE IF EXISTS employeeDB;
 CREATE DATABASE employeeDB;

 USE employeeDB;

 CREATE TABLE employee (
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     INDEX role_index (role_id),
     CONSTRAINT fork_role FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
     INDEX man_index (manager_id),
     CONSTRAINT fork_man FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
 );

 CREATE TABLE role(
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30) UNIQUE NOT NULL,
     salary DECIMAL UNSIGNED NOT NULL,
     department_id INT UNSIGNED NOT NULL,
     INDEX dep_index (department_id),
     CONSTRAINT fork_dep FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
 );

 CREATE TABLE department(
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) UNIQUE NOT NULL
  );