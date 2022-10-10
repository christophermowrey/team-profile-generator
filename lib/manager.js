const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNum) {
        super( )
        this.officeNum = officeNum;
    }
}

const manager = new Manager();

module.exports = Employee;