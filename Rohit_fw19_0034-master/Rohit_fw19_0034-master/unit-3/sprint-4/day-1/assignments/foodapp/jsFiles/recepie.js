import navbar from  "../components/navbar.js"
//import {append, getdata , details} from "../components/fetch.js"

document.getElementById("navbar").innerHTML= navbar();

let data = JSON.parse (localStorage.getItem("meals"));


function append(data){
    console.log(data);
    let cont = document.getElementById("cont");
    
    cont.innerHTML=null;
    data.forEach(function(el){
        
      let meal=document.createElement("div");
        

        let img = document.createElement("img");
        img.src = el.strMealThumb;

        let inst = document.createElement("p");
        inst.setAttribute("class", "ins");
        inst.innerText = el.strInstructions;

        let t = document.createElement("h3");
        t.innerText = el.strMeal;


      meal.append(img,t,inst)
      cont.append(meal)

    })

}
append(data);