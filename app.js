const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
const USER_PROMPTS = {
  newEmployee: [
    {
      type: "list",
      name: "role",
      message: "Choose your role: ",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      when: (selection) => {
        return selection.role === "Manager";
      },
      type: "input",
      name: "uniqueProperty",
      message: "What is your office number?",
    },
    {
      when: (selection) => {
        return selection.role === "Engineer";
      },
      type: "input",
      name: "uniqueProperty",
      message: "What is your gitHub username?",
    },
    {
      when: (selection) => {
        return selection.role === "Intern";
      },
      type: "input",
      name: "uniqueProperty",
      message: "What school are you attending?",
    },
    {
      type: "list",
      name: "addAnotherEmployee",
      message: "Would you like to add another employee?",
      choices: ["Yes", "No"],
    },
  ],
};

const promptUser = () => inquirer.prompt(USER_PROMPTS.newEmployee);

const newEmployee = (response) => {
  if (response.role === "Manager") {
    const newPerson = new Manager(
      response.name,
      response.id,
      response.email,
      response.uniqueProperty
    );
    employees.push(newPerson);
  } else if (response.role === "Engineer") {
    const newPerson = new Engineer(
      response.name,
      response.id,
      response.email,
      response.uniqueProperty
    );
    employees.push(newPerson);
  } else if (response.role === "Intern") {
    const newPerson = new Intern(
      response.name,
      response.id,
      response.email,
      response.uniqueProperty
    );
    employees.push(newPerson);
  }
};

promptUser()
  .then((response) => {
    newEmployee(response);
    if (response.addAnotherEmployee === "Yes") {
      promptUser();
    }
  })
  .catch((err) => console.log(err));
