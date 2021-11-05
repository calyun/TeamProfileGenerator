const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.githubUser = github
    }

    getRole(){
        return "Engineer"
    }

    getGithub() {
        return this.githubUser;
    }
} 

module.exports = Engineer