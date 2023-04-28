// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } 
    return "";
};
console.log(renderLicenseBadge);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description
${data.description}

## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contact](#contact)
*[Contributors](#contributors)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
link format [title](https://www.example.com)


## Contact Information
github.com/${data.github}
${data.email}`
}

module.exports = generateMarkdown;

