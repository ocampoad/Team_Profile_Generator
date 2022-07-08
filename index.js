const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML")

const prompt = inquirer.createPromptModule();

const questions = [
    {
        message: "What is the employee's name?",
        name: "employeeName",
        type: "input"
    },
    {
        message: "What is their role?",
        name: "role",
        type: "list",
        choices: ["Intern", "Engineer", "Manager"],
    },
    {
        message: "What is their ID#?",
        name: "id",
        type: "input"
    },
    {
        message: "What is their email address?",
        name: "email",
        type: "input"
    },
    {
        when(answers) {
            return answers.role === "Intern"
        },
        message: "Which school are they from?",
        name: "school",
        type: "input"
    },
    {
        when(answers) {
            return answers.role === "Engineer"
        },
        message: "What is their GitHub account?",
        name: "github",
        type: "input"
    },
    {
        when(answers) {
            return answers.role === "Manager"
        },
        message: "What is their office number?",
        name: "officeNumber",
        type: "input"
    },
    {
        message: "Would you like to add more team members",
        name: "anymore",
        type: "list",
        choices: ["Yes", "No"]
    }
];

let listofEmployees = [];

function askQuestions() {
    prompt(questions).then((answers) => {
        // create employee object using classes that test for roles
        switch (answers.role) {
            case "Intern":
                let newIntern = new Intern(answers.employeeName, answers.id, answers.email, answers.school);
                listofEmployees.push(newIntern)
                break
            case "Engineer":
                let newEngineer = new Engineer(answers.employeeName, answers.id, answers.email, answers.github)
                listofEmployees.push(newEngineer)
                break
            case "Manager":
                let newManager = new Manager(answers.employeeName, answers.id, answers.email, answers.officeNumber)
                listofEmployees.push(newManager)
                break
        }
        // listofEmployees.push(); // push the new employee object
        if (answers.anymore === "Yes") {
            askQuestions();
        } else {
            writeToFile("someFileName", listofEmployees);
        }
    });
}

function writeToFile(fileName, data) {
    const HTML = generateHTML(data);
    fs.writeFile(`./dist/employees.html`, JSON.parse(JSON.stringify(HTML)), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('success');
    })
}

askQuestions();
