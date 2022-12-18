

function append(data){
    console.log(data)
    let container = document.getElementById("results");

    container.innerHTML="";

    data.forEach(function(el){

        let news = document.createElement("div");
        news.setAttribute("class", "news");
        news.addEventListener("click",()=>{details(el)});

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

        news.append(img,title,date,description,author);
        container.append(news);
    })
}

function details(el){

    let allnews =[];

    allnews.push(el);
    localStorage.clear("news");

    localStorage.setItem("news",JSON.stringify(allnews));
    window.location.href="./news.html";

}

let getdata = async (url) =>{
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    append(data.articles);
}

export {getdata,append,details};