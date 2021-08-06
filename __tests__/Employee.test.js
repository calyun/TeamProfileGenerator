const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("Returns name", () => {
        const employee = new Employee("Test Employee", [
            {name: "Test Employee"}
        ]);
        employee.get
        expect(employee.name).toBe("Test Employee")
    })
})