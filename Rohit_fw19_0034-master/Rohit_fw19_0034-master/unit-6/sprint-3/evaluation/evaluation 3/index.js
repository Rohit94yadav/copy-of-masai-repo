const express = require("express");
const {connection} = require("./config/db");
const {NotesRouter} = require("./routes/notes.route")

require("dotenv").config()
const app = express()
app.use(express.json())


const {NotesModel} = require("./model/notes.model")


app.get("/", (req,res)=>{
    res.send({"msg" : "Hello..."})
})

app.use("/notes",NotesRouter)

app.listen(7500, async ()=>{
    try{
        await connection;
        console.log("Connected Successfully To Database...")
    }
    catch(err){
        console.log(err,"Failed To Connect...")
    }

    console.log("Running On Port 7500")
})

