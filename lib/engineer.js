const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super()
        this.github = github;
    }
}

const engineer = new Engineer();

module.exports = Engineer;