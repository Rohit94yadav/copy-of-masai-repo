

function append(){

    let storedproducts = JSON.parse(localStorage.getItem("data")) || [];

    let container = document.getElementById("products_data");

    container.innerHTML=null;


    storedproducts.forEach(function(el,index){

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src= el.image;

        let name = document.createElement('h2');
        name.innerText= el.name;

        let brand = document.createElement("h3");
        brand.innerText= el.brand;

        let price = document.createElement("h3");
        price.innerText=el.price;

        let btn = document.createElement('button');
        btn.innerText="REMOVE";
        btn.addEventListener("click", function(){
            remove(el,index);
        });


        div.append(img,name,brand,price,btn);
        container.append(div);

    });

}

append();

function remove(el,index){
    let storedproducts = JSON.parse(localStorage.getItem("data")) || [];

    let newdata = storedproducts.filter(function(el,i){
        if(i=== index){
            localStorage.setItem("data", JSON.stringify(storedproducts));
        }else{
            return i !== index;
        }
    });
    localStorage.setItem("data", JSON.stringify(newdata));
    append();
}