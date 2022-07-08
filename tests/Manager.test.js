const Manager = require("../lib/Manager");

const newManager = new Manager("Adriane", 12345, "someemail.com", "909")
describe("Manager", () => {
    describe("getName", () => {
        it("should return the input name", () => {
            expect("Adriane").toEqual(newManager.getName());
        })
    });
    describe("getId", () => {
        it("should return the input id", () => {
            expect(12345).toEqual(newManager.getId());
        })
    });
    describe("getEmail", () => {
        it("should return the input email address", () => {
            expect("someemail.com").toEqual(newManager.getEmail());
        })
    });
    describe("getOfficeNumber", () => {
        it("should return the input email address", () => {
            expect("909").toEqual(newManager.getOfficeNumber());
        })
    });
    describe("getRole", () => {
        it("should return the input email address", () => {
            expect("Manager").toEqual(newManager.getRole());
        })
    })
});