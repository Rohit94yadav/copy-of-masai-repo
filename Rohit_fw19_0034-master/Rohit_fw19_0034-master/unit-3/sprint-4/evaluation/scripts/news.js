// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
import { getdata } from "../components/fetch.js";

document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("news"));

function append(data){
    
    let container = document.getElementById("detailed_news");

    container.innerHTML="";

    data.forEach(function(el){

        let news = document.createElement("div");
        

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let title = document.createElement("h2");
        title.innerText = el.title;

        let date = document.createElement("h3");
        date.innerText= el.publishedAt;

        let description = document.createElement("p");
        description.innerText= el.description;

        let author = document.createElement("h2");
        author.innerText= `News By - ${el.author}`;

        news.append(img,title,data,description,author);
        container.append(news);
    })
}

append(data);

document.getElementById("search_input").addEventListener("keypress",search);

function search(){
    let query = document.getElementById("search_input").value;

    const url = `https://masai-api.herokuapp.com/news?q=${query}`

        getdata(url);
        window.location.href = "./search.html"
}
