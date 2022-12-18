

const income = require("./index");

describe("calculating tax", ()=>{
    test("calculating tax for income is less than 2.5 lakh", ()=>{
            expect(income(249000)).toBe(0)
    })

    test("calculating tax for income is less than 5 lakh", ()=>{
        expect(income(400000)).toBe(40000)
})

test("calculating tax for income is less than 10 lakh", ()=>{
    expect(income(800000)).toBe(160000)
})

test("calculating tax for income is more than 10 lakh", ()=>{
    expect(income(1800000)).toBe(540000)
})



    
})