// function to generate markdown for README
// README layout taken from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function generateMarkdown(data) {
  // Badges for the README file 
// Assigning to variables so that they can used and changed when using ${}
// Github picture for questions
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const licenseBadge = `https://opensource.org/licenses/${data.license}`

  return `# ${data.title}
  
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
  ${licenseBadge}

  ## Questions
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generateMarkdown;
