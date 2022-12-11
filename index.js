const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const employees = []

function init() {
    inquirer.prompt([
        //ask questions about what type of employee
        {
            type: "list",
            name: "role",
            message: "What is your role??",
            choices: ["intern", "manager", "engineer", "done"]
        },
    ]).then((res) => {
        //if enginner ask these else ask 
        if (res.role == "engineer") {
            engineerQuestions()
        } else if(res.role == "intern"){

        }else if(res.role == "manager"){
            
        }else if(res.role == "done"){
            //make a function to generate html from responses.
        }
    })
}



//make prompt functions for engineer questions ect
function engineerQuestions() {
    inquirer.prompt([
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
    ]).then((res) => {
        //if enginner ask these else ask 
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        console.log(engineer);
        employees.push(engineer);
        console.log(employees);
        init();

    })

}
init();