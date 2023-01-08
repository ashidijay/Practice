const { default: Testrunner } = require("jest-runner");
const result = require("./multiplyNumbers");

test("returns the multiplication of the two numbers", () => {
    expect(result(10,20)).toBe(200);
})

// test("returns the multiplication of the two numbers", function mutiply() {
//     expect(result(10,20)).toBe(200);
// })
// I can use the arrow notation for a function I don't need the name of
// function multiply(){} was just replaced with () =>{}