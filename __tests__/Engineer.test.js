const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("creates an engineer", () => {
        const engineer = new Engineer('Rory', 34, 'hipcat@gmail.com', 'hipcat');

        expect(engineer.name).toEqual("Rory");
        expect(engineer.id).toEqual(34);
        expect(engineer.email).toEqual('hipcat@gmail.com');
        expect(engineer.githubUser).toEqual('hipcat');
    })
})

describe("Engineer class", () => {
    it("gets engineer info", () => {
        const engineer = new Engineer('Rory', 34, 'hipcat@gmail.com', 'hipcat');

        expect(engineer.getGithub()).toEqual('hipcat');
        expect(engineer.getRole()).toEqual('Engineer');
    })
})