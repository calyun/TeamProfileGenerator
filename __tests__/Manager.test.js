const Manager = require('../lib/Manager');

describe("Engineer class", () => {
    it("creates an engineer", () => {
        const manager = new Manager('Rory', 34, 'hipcat@gmail.com');

        expect(manager.name).toEqual("Rory");
        expect(manager.id).toEqual(34);
        expect(manager.email).toEqual('hipcat@gmail.com');
    })
})

describe("Manager class", () => {
    it("gets manager info", () => {
        const manager = new Manager('Rory', 34, 'hipcat@gmail.com', 'hipcat');

        expect(manager.getRole()).toEqual('Manager');
    })
})