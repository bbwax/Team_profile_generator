const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require('fs');
const generateHTML = require("./src/createHTML");
const employees = [];


function done() {
    let doc = generateHTML(employees);
    console.log('employees array', employees);
    console.log( 'generated html', doc);
    fs.writeFileSync("./dist/index.html", doc);
}

async function init() {
    const res = await inquirer.prompt([
        //ask questions about what type of employee
        {
            type: "list",
            name: "role",
            message: "What is your role??",
            choices: ["intern", "manager", "engineer", "done"]
        },
    ])

    //if enginner ask these else ask 
    if (res.role == "engineer") {
        engineerQuestions()
    } else if (res.role == "intern") {
        internQuestions()
    } else if (res.role == "manager") {
        managerQuestions()
    } else if (res.role == "done") {
        //make a function to generate html from responses.
        done()
    }
};





//make prompt functions for engineer questions ect
async function engineerQuestions() {
    const res = await inquirer.prompt([
        //ask questions about engineer
        {
            type: "input",
            name: "name",
            message: "What is your name??"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id??"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email??"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github??"
        }
    ]);
    //if enginner ask these else ask 
    const engineer = new Engineer(res.name, res.id, res.email, res.github);
    employees.push(engineer);
    init();



}

async function managerQuestions() {
    const res = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name??"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id??"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email??"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number??"
        }
    ]).then((res) => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        employees.push(manager);
        init();

    })
};
async function internQuestions() {
    const res = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name??"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id??"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email??"
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of your school??"
        }
    ]).then((res) => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        employees.push(intern);
        init();

    })
};


init();

