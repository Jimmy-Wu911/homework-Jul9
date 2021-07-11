// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge;
  if(license.length>0){
    badge = `![${license}]`;
  }else{
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.length>0){
    
    badge = `(https://img.shields.io/badge/License-${license}-lightblue.svg)`;
  }else{
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## Badges

${renderLicenseBadge(license)}${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

# Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[License](#license)

##Installation

${data.installation}

##Usage

${data.usage}

##License

${data.license}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
