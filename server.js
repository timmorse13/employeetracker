const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_db',
});


const startDatabase = () => {
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
};

const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        console.table(results);
        startDatabase();
    })

};

const addEmployee = () => {
    inquirer
        .prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of the new employee?',
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of the new employee?',
        },
        {
            name: 'roleID',
            type: 'input',
            message: 'What is the role ID of the new employee?',
        },
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.roleID,
            },
            (err) => {
                if (err) throw err;
                console.log('Successfully added employee!');
                startDatabase();
            }
        );
    });
};

startDatabase();