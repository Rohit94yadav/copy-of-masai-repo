import navbar from  "../components/navbar.js"
import {append, getdata} from "../components/fetch.js"

document.getElementById("navbar").innerHTML= navbar();

let id;
document.getElementById("query").addEventListener("input", debounce);




 function search(){
    let query = document.getElementById("query").value;
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

     getdata(url);

 }

 const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=s`;
 
 getdata(url);
 




function debounce(){

if(id){
console.log("hello")
    clearTimeout(id);
}

id = setTimeout(function(){
    search();
},2000)
}

