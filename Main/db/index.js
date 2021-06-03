const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findEmployees() {
        return this.connection.query(
            " SELECT employee.id, employee.first_name,employee.last_name, role.title,department.name AS department, role.salary, CONCAT(manager.first_name,manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN deparment on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    findDepartments() {
        return this.connection.query(
            "SELECT department.id,department.name,SUM(role.salary) AS personnel_budget FROM department LEFT JOIN role ON role.deparment_id = department.id LEFT JOIN empoyee ON employee.role_id = role.id GROUP BY department.id, department.name;"
        );
    }

    findEmployeeByDepartment(departmentId) {
        return this.connection.query(
            "SELECT employee.id,employee.first_name,employee.last_name,department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;"
        );
    }
}