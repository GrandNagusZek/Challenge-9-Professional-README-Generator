// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(license==="Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(license==="IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }else (license==="No License");{
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseBadge = renderLicenseBadge(license);

  if (licenseBadge) {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](${licenseLink})`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);

  if (licenseBadge) {
    return `${licenseBadge}`
  }else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}    

## Contributing

${data.contributing}

## License

${data.license}


## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)



## Tests

${data.test}

## Questions

For questions about this project, please use the following contact methods: 

<ul>
  <li> <a href='mailto://${data.email}?subject="contact me"&body="hi"'> Email Me </a> </li>
  <li> <a href='https://github.com/${data.username}'> My GitHub Profile </a> </li>
</ul>

`;
}

module.exports = generateMarkdown;
