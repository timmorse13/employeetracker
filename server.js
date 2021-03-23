const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_db',
});


const start = () => {
    inquirer
      .prompt({
          name: 'start',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
              'View employees', 
              'Add Employee', 
              'Remove Employee', 
              'Update Employee Role', 
              'View Department', 
              'Add Employee to Department',
              'EXIT',
            ],
      })
      .then((answer) => {
          if (answer.start === 'View employees') {
              viewEmployees();
          } else if (answer.start === 'Add Employee') {
              addEmployee();
          } else if (answer.start === 'Remove Employee') {
              removeEmployee();
          } else if (answer.start === 'Update Employee Role') {
              updateRole();
          } else if (answer.start === 'View Department') {
              viewDepartment();
          } else if (answer.start === 'Add Employee to Department') {
              addEmToDpt();
          } else {
              connection.end();
          }
      });
}