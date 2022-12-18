
const express = require("express")

const fs = require("fs")

const randomstring = require("randomstring");

const app = express()

app.use(express.json())

const validator = (req,res,next)=>{
    if(req.method === "POST"){
        if(req.body.id !== undefined && req.body.title !== undefined && req.body.content !== undefined && req.body.author !== undefined
            && typeof(req.body.id === "number") && typeof(req.body.title === "string") && typeof(req.body.content === "string") 
            && typeof(req.body.author === "string") 
            ){
                next()
            }else{
                res.status(400).send("Validation Failed")
            }
    }else{
        next()
    }
}

const guard = (req,res,next)=>{
    if(req.method === "DELETE" && req.method === "PATCH"){
        if(req.query.password === 54213){
            next()
        }else{
            res.send("You are not authorised to do this operation")
        }
    }
    
       next()
    
}

const logger = (req,res,next)=>{
    const file = `method-${req.method} url - ${req.originalURL} userAgent -${req.headers["user-agent"]}`+"/r/n"
    fs.appendFileSync("./logs.txt", file,{encoding:"utf-8"})
    next()
}

app.use(validator,guard,logger)

app.get("/posts",(req,res)=>{
    const data = fs.readFileSync("./posts.json","utf-8")
   const parsedData = JSON.parse(data);
   const posts = parsedData.posts
   console.log(posts)
    res.json(posts)
    //res.send("Read All Posts")
})

app.post("/posts/create",(req,res)=>{
    const post = req.body
    const file = fs.readFileSync("./posts.json",{encoding:"utf-8"})
    const parsedFile = JSON.parse(file)
    const newfile = parsedFile.posts.push(post)
    fs.writeFileSync("./posts.json",JSON.stringify(parsedFile),{encoding:"utf-8"})
    res.send("New Post Added")
})

app.delete("/posts/:postId",(req,res)=>{
    const {postId} = req.params

    const file = fs.readFileSync("./posts.json",{encoding:"utf-8"})
    const parsedFile = JSON.parse(file)
    const posts = parsedFile.posts

    let deletePost = posts.filter(el =>{
        return el.id == postId ?false : true
    })

    parsedFile.posts = deletePost

    fs.writeFileSync("./posts.json",JSON.stringify(parsedFile),{encoding:"utf-8"})
    res.send("Post Successfully Deleted")
})

app.patch("/posts/:postId",(req,res) => {
    const {postId} = req.params
    const payload = req.body
    const file = fs.readFileSync("./posts.json",{encoding:"utf-8"})

    const parsedFile = JSON.parse(file)
    const posts = parsedFile.posts

    let updatePost = posts.map(el =>{
        return el.id == postId ? {...payload,id:postId} : el
    })

    parsedFile.posts = updatePost
    fs.writeFileSync("./posts.json",JSON.stringify(parsedFile),{encoding:"utf-8"})
    res.send("Post Successfully Updated")

})


app.get(`/generaterandomstring/:length`,(req,res) => {
  const {length} = req.params;
  let str="";
  if(length){

      str = randomstring.generate(Number(length));
  }else{
    str = randomstring.generate()
  }
    
console.log(length)
   console.log(str)
    res.send(str)

})

app.listen(9000,()=>{
    console.log("Server running on port 9000")
})