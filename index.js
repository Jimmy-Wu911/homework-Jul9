// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) =>
    err?console.error(err):console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    let data = inquirer.prompt([
        {
            name: "title",
            message:"Please enter the title of your project:"
        },
        {
            name: "description",
            message:"Please write a description explaining your Project:"
        },
        // {
        //     name:"tableOfContents",
        //     message:"Please provide a table of contents:"
        // },
        {
            name: "installation",
            message:"Please provide a description of how to install your project:"
        },
        {
            name: "usage",
            message:"Please provide instructions and examples for use:"
        },
        // {
        //     name:"credit",
        //     message:"Please list your collaborators,if any, with links to their GitHub profiles:"
        // },
        {
            type:"list",
            name:"license",
            messag:"Please select a license for your project:",
            choices:['Apache','GNU','NPM']
        }
    ])
.then(data =>{
    return generateMarkdown(data);
})
// .then(data => console.log(data));
.then(text => writeToFile("./output/README.md",text));
}

// Function call to initialize app
init();
