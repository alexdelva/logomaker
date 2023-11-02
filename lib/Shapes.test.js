const Shapes = require("./Shapes")

describe("Shapes",()=>{
    describe("setColor",()=>{
        it("text color",()=>{
            const shape = new Shapes()
            shape.setColor("blue")
                expect(shape.textColor).toEqual("blue")
        })
    })
})

describe("Shapes",()=>{
describe("setText",()=>{
    it("text",()=>{
        const shape = new Shapes()
        shape.setText("AD")
            expect(shape.text).toEqual("AD")
    })
})
})

describe("Shapes",()=>{
describe("setShapeColor",()=>{
    it("shape color",()=>{
        const shape = new Shapes()
        shape.setShapeColor("blue")
            expect(shape.shapeColor).toEqual("blue")
    })
})
})