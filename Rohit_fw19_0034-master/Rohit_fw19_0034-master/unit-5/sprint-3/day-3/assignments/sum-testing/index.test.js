

const sum = require("./index");

describe("Testing the sum function", ()=>{
    test("Add 2 positive numbers", ()=>{
            expect(sum(1,2)).toBe(3)
    })

    test("Add 2 negative numbers", ()=>{
        expect(sum(-1,-2)).toBe(-3)
    })

    test("Add 2 floating numbers", ()=>{
        expect(sum(1.5,2.5)).toBe(4)
    })

    test("Add 4  numbers", ()=>{
        expect(sum(1,5,2,5)).toBe(13)
    })
})