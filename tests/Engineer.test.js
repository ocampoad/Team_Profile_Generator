const Engineer = require("../lib/Engineer");

const newEngineer  = new Engineer("Adriane", 12345, "someemail.com", "githubaccount")
describe("Engineer", () => {
    describe("getName" , () => {
        it("should return the input name", () => {
            expect("Adriane").toEqual(newEngineer.getName());
        })
    });
    describe("getId", () => {
        it("should return the input id", () => {
            expect(12345).toEqual(newEngineer.getId());
        })
    });
    describe("getEmail", () => {
        it("should return the input email address", () => {
            expect("someemail.com").toEqual(newEngineer.getEmail());
        })
    });
    describe("getGithub", () => {
        it("should return the input email address", () => {
            expect("githubaccount").toEqual(newEngineer.getGithub());
        })
    });
    describe("getRole", () => {
        it("should return the input email address", () => {
            expect("Engineer").toEqual(newEngineer.getRole());
        })
    });
})