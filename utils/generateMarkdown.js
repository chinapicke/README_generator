// function to generate markdown for README
// README layout taken from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function generateMarkdown(data) {
  // Badges for the README file 
// Assigning to variables so that they can used and changed when using ${}
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

  return `# ${data.title}
   
  ## Description
    ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)

  ## Installation
  Steps required to run this program are: ${data.installation}
  
  ## Usage
  Instructions and examples of how to use this program: ${data.usage}

  ## Credits
  ${data.contributer}

  ## License
  ${data.license}

  ----------------------
  ## Features
  Features included: ${data.features}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contact
  \n![Badge](${gitHub}) 
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generateMarkdown;
