// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
import {getdata, append} from "../components/fetch.js"

document.getElementById("navbar").innerHTML= navbar();



document.getElementById("search_input").addEventListener("keypress",search);

function search(){
    let query = document.getElementById("search_input").value;

    const url = `https://masai-api.herokuapp.com/news?q=${query}`

        getdata(url);
}
const url = `https://masai-api.herokuapp.com/news?q=tesla`

getdata(url);