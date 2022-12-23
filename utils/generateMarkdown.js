// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `https://img.shields.io/badge/license-${license}-yellow`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)

  return `# ${data.Title}

${renderLicenseBadge(data.License)}
  ## Description

  ${data.Description}

  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  
  ${data.Installation}
  
  ## Usage
  
  ${data.Usage}
  
  ## License
  
  ## Contributing

  ${data.Contributing}
  
  ## Tests

  ${data.Tests}
  
  ## Questions

  Github: https://github.com/${data.Github}

  Please email any questions to ${data.Email}

`;
}

module.exports = generateMarkdown;
