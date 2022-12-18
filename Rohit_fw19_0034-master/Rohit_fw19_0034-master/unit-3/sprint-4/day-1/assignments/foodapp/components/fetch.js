
function append(data){
    console.log(data);
    let cont = document.getElementById("cont");
    
    cont.innerHTML=null;
    data.forEach(function(el){
        
      let meal=document.createElement("div");
        meal.setAttribute("class", "meal");
        meal.addEventListener("click",()=>{details(el)})

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


function details(el) {
     
    let meal = [];
    
    meal.push(el);
    localStorage.clear("meals")
    console.log(meal)
    
    localStorage.setItem("meals",JSON.stringify(meal));
    window.location.href="recepie.html"
   
}
let getdata = async (u) => {
    let res = await fetch(u);
    let data =await res.json();
  
        append(data.meals);

}

export {append,details,getdata}
 

