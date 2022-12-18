// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
import { getdata, append } from "../components/fetch.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("search_input").addEventListener("keyup",search);

function search(event){
    if(event.key === "Enter"){

        let query = document.getElementById("search_input").value;
    
        const url = `https://masai-api.herokuapp.com/news?q=${query}`
    
        getdata(url);
        window.location.href="./search.html"
    }

}



document.getElementById("in").addEventListener("click", india);

function india() {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";

  getdata(url);
}



document.getElementById("us").addEventListener("click", usa);

function usa() {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=us";

  getdata(url);
}



document.getElementById("ch").addEventListener("click", china);

function china() {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=ch";

  getdata(url);
}



document.getElementById("uk").addEventListener("click", uk);

function uk() {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=uk";

  getdata(url);
}

document.getElementById("nz").addEventListener("click", newzealand);

function newzealand() {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=nz";

  getdata(url);
}

const url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";

getdata(url);
