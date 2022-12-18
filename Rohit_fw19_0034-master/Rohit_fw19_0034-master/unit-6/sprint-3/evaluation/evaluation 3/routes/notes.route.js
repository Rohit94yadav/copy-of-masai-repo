const express = require("express");

const NotesRouter = express.Router();
const {NotesModel} = require("../model/notes.model")


const MiddleValidator = (req,res,next)=>{
    const {title,note,tags} = req.body
    if(title && note && tags){
        next()
    }else{
        res.status(400).json({message:"Some Field is Missing"})
    }
}

NotesRouter.get("/", async (req,res)=>{
    const params = res.query
    try{
        
        const notes = await NotesModel.find(params)
        
        res.send(notes)
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something Went Wrong..."})
    }
})

NotesRouter.post("/create",MiddleValidator, async (req,res)=>{
    try{
        const payload = req.body
        const data = new NotesModel(payload)
        await data.save()
        res.send({"msg" : "Added Successfully..."})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Data Not Added"})
    }
})

NotesRouter.patch("/update/:userID", async (req, res) => {
    const userID = req.params.userID
    const payload = req.body;
    try{
        //const query = await NotesModel.findByIdAndUpdate({_id :userID},payload)
        const query=await NotesModel.updateOne({_id :userID},{$set:{title:req.body.title,note:req.body.note,tags:req.body.tags}});
        console.log(query)
        res.send("Notes Updated")
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong, try again later"})
    }
})


NotesRouter.delete("/delete/:userID", async (req, res) => {
    const userID = req.params.userID
    const payload = req.body;
    try{
        await NotesModel.findByIdAndDelete({_id :userID})
       
        res.send(`${userID} Deleted Successfully`)
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong, try again later"})
    }
})



NotesRouter.get("/notes", async (req, res) => {
    try {
      const page_no = parseInt(req.query.page_no) || 0;
      const limit = 2;
      const result = {};
      const totalPosts = await PostModel.countDocuments().exec();
      let startIndex = page_no * limit;
      const endIndex = (page_no + 1) * limit;
      result.totalPosts = totalPosts;
      if (startIndex > 0) {
        result.previous = {
          page_no: page_no - 1,
          limit: 2,
        };
      }
      if (endIndex < (await PostModel.countDocuments().exec())) {
        result.next = {
          page_no: page_no + 1,
          limit: 2,
        };
      }
      result.data = await PostModel.find()
       
        
        .limit(2)
        .exec();
      result.rowsPerPage = 2;
      return res.json({ msg: "Posts Fetched successfully", data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Sorry, something went wrong" });
    }
  });



module.exports={NotesRouter}
