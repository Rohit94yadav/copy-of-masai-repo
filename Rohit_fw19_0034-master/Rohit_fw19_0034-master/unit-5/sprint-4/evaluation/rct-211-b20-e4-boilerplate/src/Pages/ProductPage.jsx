import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { getProduct } from '../Redux/action';
import './productpage.css'

const ProductPage = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.reducer.products);
    
   

    useEffect(()=>{
            

            dispatch(getProduct());
    },[])

    return (
        <div style={{ width: "100%" }}>
            <div className='product-cards'>
                {products.length > 0 && 
                products.map((item)=>{
                    return <ProductCard key={item.id} item = {item}  />
                })
                }
                {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
                */}
            </div>
        </div>
    );
}

export default ProductPage