import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";

function ProductPage() {

  const [product, setProducts]= useState([]);
 
  
  
  useEffect(()=>{
   handleFetchData()
  },[])

  const handleFetchData= async (page=1)=>{
    try{
    
      const data = await getProducts({page});
      setProducts(data)
      setLoading(false)
    }
    catch(err){
     
      console.log(err);
    }
  }

  console.log(product)

 

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select"></select>
      </div>
      <Pagination />
     
      <ProductList />
    </div>
  );
}

export default ProductPage;
