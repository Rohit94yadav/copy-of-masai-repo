
async function getdata(){
    
    let url = " https://grocery-masai.herokuapp.com/items";

    let res = await fetch(url);
    
    let data = await res.json();

    console.log(data)
    localStorage.setItem("alldata", JSON.stringify(data));
    append(data.data)

}


getdata();

let productLS = JSON.parse(localStorage.getItem("wholedata")) || [];


function append(data){
    
    if(!data){
        return;
    }
    data.forEach(function(el){
        
        
        let groceries = document.getElementById("groceries");

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

        let button = document.createElement("button");
        button.innerText= "ADD TO CART";
        button.setAttribute("class", "add_to_cart");
        // button.addEventListener("click", ()=>{
            
        //     
        // })

        button.addEventListener("click",function(){

           //    window.location.href = "cart.html"

            if(productfun(el._id)=== true){
                productLS.push(el);

                localStorage.setItem("cart_items", JSON.stringify(productLS));
                
            }
            let wallet = document.getElementById("wallet");
            let x = 700 - el.price;
            wallet.innerText = x;
            alert("ADDED TO CART")



        })
    
    
        div.append(img,name,price,id, button);
    
      groceries.append(div); 

    })
   

}


function productfun(id){
    for(let i=0;i< productLS.length;i++){
        if(productLS[i]._id == id){
            return false;
        }
    }
    return true;
}