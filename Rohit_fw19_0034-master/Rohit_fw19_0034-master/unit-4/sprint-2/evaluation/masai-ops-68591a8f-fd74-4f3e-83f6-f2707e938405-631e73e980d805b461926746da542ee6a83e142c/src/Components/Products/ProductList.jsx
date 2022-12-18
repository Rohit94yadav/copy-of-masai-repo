import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component

const ProductList = ({ProductItem}) => {
  return <div data-testid="products-container"> {product.map(el=><ProductItem id={el.id} title={el.title} price = {el.price} image={el.image} catagory={el.catagory} />)}</div>;
};

// export
export default ProductList;
