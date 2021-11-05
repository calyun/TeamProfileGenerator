const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("creates an employee", () => {
        const employee = new Employee('Rory', 34, 'hipcat@gmail.com');

        expect(employee.name).toEqual("Rory");
        expect(employee.id).toEqual(34);
        expect(employee.email).toEqual('hipcat@gmail.com');
    })
})

describe("Employee Class", () => {
    it("Gets Employee Info", () => {
        const employee = new Employee('Rory', 34, 'hipcat@gmail.com');

        expect(employee.getName()).toEqual("Rory")
        expect(employee.getId()).toEqual(34)
        expect(employee.getEmail()).toEqual("hipcat@gmail.com")
    })
})