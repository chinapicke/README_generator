// Badges for licenses 
// Badges URL from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba, if NONE selected then returns empty string so no badge is shown
const licenseBadge = (license)=> {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

// function to generate markdown for README
// README layout taken from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function generateMarkdown(data) {
// Assigning to variables so that they can used and changed when using ${}
// Github picture for questions
  const avatar = `https://github.com/${data.username}.png?size=50`;

  return`
  
  # ${data.title}

  ##${licenseBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  Steps required to run this program are: ${data.installation}
  
  ## Usage
  Instructions and examples of how to use this program: ${data.usage}

  ## Contributions
  ${data.contributer}

  ## Tests
  To test, run the following command: ${data.tests}

  ## License
  ${data.license}

  ## Questions
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generateMarkdown;
