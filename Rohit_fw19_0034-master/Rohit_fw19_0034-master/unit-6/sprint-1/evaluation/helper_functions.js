const getIP = require('dns');
const fs= require("fs");
const cowsay = require("cowsay");

getIP.lookup('masaischool.com', (err, value) => { 
    if(err) { 
        console.log(err); 
        return; 
    } 
    console.log(value); 
}) 

fs.writeFile("./test.txt","hello ",{encoding: "utf-8"}, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("check test.txt")
})

getIP.lookup('masaischool.com', (err, value) => { 
    if(err) { 
        console.log(err); 
        return; 
    } 
    console.log(value); 
}) 



fs.readFile("./test.txt",{encoding: "utf-8"}, (err, data) =>{
    if(err){
        console.log("err in reading file")
        console.log(err)
    }
    console.log(data)
})


 
    fs.unlink('test.txt',function(err){
         if(err) return console.log(err);
         console.log('file deleted successfully');
    });  


 module.exports = {getIP, fs, cowsay};