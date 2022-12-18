const mongoose = require("mongoose")
const NotesSchema = mongoose.Schema({
    title:String,
    note:String,
    tags:String,
})

const NotesModel = mongoose.model("notes",NotesSchema);

module.exports={NotesModel}