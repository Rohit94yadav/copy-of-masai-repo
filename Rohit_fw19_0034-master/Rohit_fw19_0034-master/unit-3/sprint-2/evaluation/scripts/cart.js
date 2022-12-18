
let productLS = JSON.parse(localStorage.getItem("cart_items")) || [];

    localStorage.setItem("cart_items", JSON.stringify(productLS));

console.log(productLS)



function append(productLS){
    
    if(!productLS){
        return;
    }
    
    productLS.forEach(function(el){
        let total = document.getElementById("cart_total");
        
        
        total.innerText = el.price;
        
        let cart = document.getElementById("cart");

        let div = document.createElement('div');
        div.setAttribute("class", "item");
    
        let img = document.createElement('img');
        img.src= el.image;
    
        let id = document.createElement('p');
        id.innerText= `Product ID:- ${el._id}`;
    
    
        let name = document.createElement('h2');
        name.innerText= el.name;
    
        let price = document.createElement('p');
        price.innerText= `${el.price} rs`;

        let btn =document.createElement("button");
        btn.innerText = "REMOVE";


        



       
    
    
        div.append(img,name,price,id,btn);
    
      cart.append(div); 

    })
   

}
    
append(productLS);