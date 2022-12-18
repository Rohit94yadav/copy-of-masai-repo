//store the products array in localstorage as "data"


function products(b,n,p,i){
    this.brand= b;
    this.name = n;
    this.price = p;
    this.image = i;
}

function storedata(e){
    e.preventDefault();

    let form= document.getElementById("product_form");

    let brand = form.product_brand.value;

    let name = form.product_name.value;

    let price = form.product_price.value;

    let image = form.product_image.value;

    let pro = new products(brand,name,price,image);

    let storedproducts = JSON.parse(localStorage.getItem("data")) || [];

    storedproducts.push(pro);

    localStorage.setItem("data", JSON.stringify(storedproducts));


}