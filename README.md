# Katas and jest test repo

- Open terminal in vscode
- Type in npm init, this will initalise an NPM project, this will create a package.json file which contains the config for our NPM project
  - Npm is a package for Node/Javascript
  - Node is a runtime environment for Javascript.
  - A runtime environment is a piece of software used to execute javascript
- Then we want to add a NPM script.
- A npm script allows us to execute command line scripts using packages within NPM
- For example lets create a simple javascript program which logs
  - First create a file in VScode called index.js
  - Then add a function which adds 1+1 and logs the result, then call this function
  - Then inside our package.json file you should see a JSON file, which is an object with all of the config for our project.
- In the scripts object let's create another key called "start" with the value being a new string
- In this string, let's type node index.js what this command is doing is we are executing the index.js file using node
- Then to execute this script on our command line, we can run npm run start

## Adding jest and tests

### Add Jest package

- To add any package to our NPM project we will run the command npm install <name-of-the-package>
- So install jest run npm install jest

### Add a test script using the Jest command

- Then we need to add a new script to run jest. This script will scan all of the files in our repo and execute any test scripts
- Let's add a new key to the scripts object called "test" with the value "jest" (remove old test script)
- Then let's run that script npm run test (it should fail as there an test scripts so let's add one

### Write jest tests

- When jest scans the repo for test files, it will look for files with the suffix .test.js which means our test files need the suffix.
- Let's add a new file called index.test.js
- Look at add test example
