

const time = require("./index");

describe("Testing the time function", ()=>{
    test("returning time in seconds", ()=>{
            expect(time(5000)).toBe(5 + "seconds")
    })

    test("returning time in minutes", ()=>{
        expect(time(120000)).toBe(2 + "minutes")
})

test("returning time in hours", ()=>{
    expect(time(3600000)).toBe(1 + "hours")
})

    
})