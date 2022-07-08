const Employee = require("../lib/Employee");

const newEmployee  = new Employee("Adriane", 12345, "someemail.com")
describe("Employee", () => {
    describe("getName" , () => {
        it("should return the input name", () => {
            expect("Adriane").toEqual(newEmployee.getName());
        })
    });
    describe("getId", () => {
        it("should return the input id", () => {
            expect(12345).toEqual(newEmployee.getId());
        })
    });
    describe("getEmail", () => {
        it("should return the input email address", () => {
            expect("someemail.com").toEqual(newEmployee.getEmail());
        })
    });
    describe("getRole", () => {
        it("should return the input email address", () => {
            expect("Employee").toEqual(newEmployee.getRole());
        })
    });
})