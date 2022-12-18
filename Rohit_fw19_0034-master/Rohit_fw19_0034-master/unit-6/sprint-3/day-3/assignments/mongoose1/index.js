const express = require("express")

const app = express()
 
const {connection, UserModel} = require("./db")


app.use(express.json())
app.get("/", (req, res) => {
    res.send({"msg" : "Welcome"})
})

app.get("/users", async (req, res) => {
    const params = req.query
    try{
        const users = await UserModel.find(params)
        res.send(users)
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong"})
    }
  
})

app.post("/createuser", async (req, res) => {
    try{
        const payload = req.body
        const user = new UserModel(payload)
        await user.save()
        res.send({"msg" : "Created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong"})
    }
})

app.patch("/edituser/:userID", async (req, res) => {
    const userID = req.params.userID
    const payload = req.body;
    try{
        const query = await UserModel.findByIdAndUpdate({_id :userID},payload)
        console.log(query)
        res.send("Updated")
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong, try again later"})
    }
})

app.delete("/deleteuser/:userID", async (req, res) => {
    const userID = req.params.userID
    try{
        await UserModel.findByIdAndDelete({_id : userID})
        res.send(`User ${userID} deleted successfully`)
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong, try again later"})
    }
})







app.listen(7500, async () => {
    try{
     await connection;
     console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Connection to DB failed")
        console.log(err)
    }
    console.log(`Listening on port 7500`)
})





// const express = require("express")

// const app = express();

//const mongoose = require("mongoose")

//const {connection, UserModel} = require("./db")


//app.use(express.json())



// const main = async ()=>{
//     try{

//         const connection = await mongoose.connect("mongodb://127.0.0.1:27017/firstdb")
//         console.log("connected to database...")
//     //     await Studentmodel.insertMany([{ name:"rohit",
//     //         age:28,
//     //         city:"gurgaon"}])
//     const stu = new Studentmodel({ name:"sohit",
//              age:28,
//              city:"gurgaon"})

//              await stu.save()
//              console.log("data added")
//      }
//     catch(err){
//         console.log(err)
//     }

// }

// main()

// const studentSchema = mongoose.Schema({
//     name:String,
//     age:Number,
//     city:String,
// })

// const Studentmodel = mongoose.model("student",studentSchema )

// app.listen(7500,()=>{
//     console.log("running on port 7500...")
// })
    
