const Intern = require("../lib/Intern");

const newIntern = new Intern("Adriane", 12345, "someemail.com", "University of School")
describe("Intern", () => {
    describe("getName", () => {
        it("should return the input name", () => {
            expect("Adriane").toEqual(newIntern.getName());
        })
    });
    describe("getId", () => {
        it("should return the input id", () => {
            expect(12345).toEqual(newIntern.getId());
        })
    });
    describe("getEmail", () => {
        it("should return the input email address", () => {
            expect("someemail.com").toEqual(newIntern.getEmail());
        })
    });
    describe("getSchool", () => {
        it("should return the input email address", () => {
            expect("University of School").toEqual(newIntern.getSchool());
        })
    });
    describe("getRole", () => {
        it("should return the input email address", () => {
            expect("Intern").toEqual(newIntern.getRole());
        })
    })
});