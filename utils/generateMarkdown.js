function generateMarkdown(answers){
    return(`
# ${answers.title}

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Testing](#testing)
* [Contributors](#contributors)
* [GitHub](#GitHub)
* [Email](#email)

### Description
${answers.description}

### License
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

### Installation
${answers.installation}

### Testing
${answers.testing}

### Contributors
${answers.contributors}

### Github
[GithubProfile](https://github.com/${answers.github}

### Email 
if you have any questions feel free to contact me at
${answers.email}
    `)
}

module.exports = generateMarkdown