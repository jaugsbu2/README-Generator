// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case 'Apache License':
      return "![license badge](/utils/images/license-Apache-License-green.svg)";
      break;
    case 'GNU General Public License':
      return "![license badge](/utils/images/license-GNU-General-Public-License-red.svg)";
      break;
    case 'MIT License':
      return "![license badge](/utils/images/license-MIT-License-yellow.svg)";
      break;
    case 'BSD 2-Clause Simplified License':
      return "![license badge](/utils/images/license-BSD-2-Clause-Simplified-License-blue.svg)";
      break;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache License':
      return "[Apache License](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GNU General Public License':
      return "[GNU General Public License](https://opensource.org/licenses/GPL-3.0)";
      break;
    case 'MIT License':
      return "[MIT License](https://opensource.org/licenses/MIT)";
      break;
    case 'BSD 2-Clause Simplified License':
      return "[BSD 2-Clause Simplified License](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case '':
      return "";
      break;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {
    case 'Apache License':
      return "This software is covered by the Apache License, version 2.0. Please refer to this link for further details: ";
      break;
    case 'GNU General Public License':
      return "This software is covered by the GNU General Public License, version 3. Please refer to this link for further details: ";
      break;
    case 'MIT License':
      return "This software is covered by the MIT License. Please refer to this link for further details: ";
      break;
    case 'BSD 2-Clause Simplified License':
      return "This software is covered by the BSD 2-Clause Simplified License. Please refer to this link for further details: ";
      break;
    case '':
      return "";
      break;

  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `${renderLicenseBadge(data.License)}

  # ${data.Title}

  ## Description

  ${data.Description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.Installation}
  
  ## Usage
  
  ${data.Usage}
  
  ## License

  ${renderLicenseSection(data.License)}
  ${renderLicenseLink(data.License)}
  
  ## Contributing

  ${data.Contributing}
  
  ## Tests

  ${data.Tests}
  
  ## Questions

  Github: https://github.com/${data.Github}

  Please email any questions to: ${data.Email}

`;
}

module.exports = generateMarkdown;
