//gererate HTML function

const Employee = require("../lib/Employee");

//const mappedEmployees = employees.map(cardGenerator);

function cardGenerator(employees) {
    let divString = '';
    for (let i = 0; i < employees.length; i++) {

        if (employees[i].getRole() == 'Manager'){


        let cardString =  
        ` <div class="employee-card">
                <div class="card-top">
                    <h2>${employees[i].getName()}</h2>
                </div>
                <p>Role: ${employees[i].getRole()}</p>
                <p>ID: ${employees[i].getId()}</p>
                <p>Email: ${employees[i].getEmail()}</p>
                <p>Office Number: ${employees[i].getOfficeNumber()}</p>
            </div>`

        divString = divString.concat(cardString);
        } else if (employees[i].getRole() == 'Engineer'){
            let cardString =  
            ` <div class="employee-card">
                <div class="card-top">
                    <h2>${employees[i].getName()}</h2>
                </div>
                <p>Role: ${employees[i].getRole()}</p>
                <p>ID: ${employees[i].getId()}</p>
                <p>Email: ${employees[i].getEmail()}</p>
                <p>Github: ${employees[i].getGithub()}</p>
            </div>`
    
            divString = divString.concat(cardString);

        } else if (employees[i].getRole() == 'Intern') {
            let cardString =  
            ` <div class="employee-card">
                <div class="card-top">
                    <h2>${employees[i].getName()}</h2>
                </div>
                <p>Role: ${employees[i].getRole()}</p>
                <p>ID: ${employees[i].getId()}</p>
                <p>Email: ${employees[i].getEmail()}</p>
                <p>School: ${employees[i].getSchool()}</p>
            </div>`
    
            divString = divString.concat(cardString);
            }
        }
    return divString;

};

function generateHTML(employees) {

    return ` <!doctype html>
<html>

<head>
    <title>My Team</title>

    <!-- Add styles for the cards -->
    <style>
        .card-top {
           
            background-color: #8093e4;

            padding: 10px;

           
            display: flex;
            justify-content: space-between;
            border-radius: 5px;
        }

        .employee-card {
            padding: 20px;
            margin: 20px;
            background-color: #c4c6c9;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
            width: 250px;
            display: flex;
            flex-direction: column;

        }
        .card-container{
            display: flex;
            flex-wrap: wrap;
        }
    </style>
</head>

<body>
    <h1 style="text-align: center">My Team</h1>

    <div class="card-container">

    ${cardGenerator(employees)}        
       
    </div>
    
</body>

</html>

`
}



module.exports = generateHTML;