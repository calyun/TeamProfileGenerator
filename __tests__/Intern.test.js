const Intern = require('../lib/Intern');

describe("Engineer class", () => {
    it("creates an engineer", () => {
        const intern = new Intern('Rory', 34, 'hipcat@gmail.com', 'ruby yacht');

        expect(intern.name).toEqual("Rory");
        expect(intern.id).toEqual(34);
        expect(intern.email).toEqual('hipcat@gmail.com');
        expect(intern.school).toEqual('ruby yacht');
    })
})

describe('Intern Class', () => {
    it('Gets Intern Info', () => {
        const intern = new Intern('Rory', 34, 'hipcat@gmail.com', 'ruby yacht');

        expect(intern.getSchool()).toEqual('ruby yacht');
        expect(intern.getRole()).toEqual('Intern');
    })
})