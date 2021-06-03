const { inherits } = require('node:util');
const db = require('./db');
require('console.table');

init();

function init() {
    const loadText = logo({ name: "Employee Tracker"}).render();

    console.log(loadText);
    
    loadQuestions();
};

async function loadQuestions() {
const {choice} = await prompt([
    {
        type:"list",
        name:"choice",
        message:"Please Select an Action",
        choices: [
            {
                name:"View All Employees",
                value:"All_Employees"
            },
            {
                name:"View Employees by Manager",
                value:"By_Manager"
            },
            {
                name:"View Employees by Department",
                value:"By_Department"
            },

        ]
    }
])
};

switch(choice) {
    case "All_Employees":

        return allEmployees();

    case "By_Manager":

        return employeeByManager();

    case "By_Department":

        return employeeByDepartment();
    
};

async function allEmployees() {
    const employee = await db.findEmployees();

    console.log('\n');
    console.table(employees);

    loadQuestions();
};

async function employeeByDepartment() {
    const departments = await db.findDepartments();
    const depChoices = departments.map(({ id, name}) => ({
        name: name,
        value: id
    }));

    const {departmentId} = await prompt ([
        {
            type:"list",
            name:"departmentId",
            message:"Choose a Department to View Employee Directory",
            choices:depChoices
        }
    ]);
    const employees = await db.findEmployeeByDepartment(departmentId);
    console.log("\n");
    console.table(employees);
};


    async function employeeByManager() {
        const managers = await db.findEmployees();

        const manChoices = managers.map(({id,first_name,last_name}) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));
        
        const {managerId} = await prompt([
            {
                type:"list",
                name:"managerId",
                message:"Choose a Manager to view Employees by Team",
                choices: manChoices
            }
        ]);

        const employees = await db.findEmployeeByManager(managerId);

        console.log('\n');

        if (employees.length === 0) {
            console.log("This Manager has no Team");
        } else {
            console.table(employees);
        }
        loadQuestions();
    };
