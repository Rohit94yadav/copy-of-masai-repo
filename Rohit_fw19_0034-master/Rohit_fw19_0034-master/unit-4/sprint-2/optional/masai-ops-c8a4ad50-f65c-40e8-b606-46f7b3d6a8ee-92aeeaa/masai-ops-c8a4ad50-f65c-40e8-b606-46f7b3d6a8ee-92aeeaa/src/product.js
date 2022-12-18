function Product(name,brand,price,description) {
  this.name=name;
  this.brand=brand;
  this.price=price;
  this.description=description;
  this.sold=false;

  // Complete the constructor function
}
const p = new Product("Shoe", "Puma", 5000, "Sport shoe");
console.log(p)
export default Product;
