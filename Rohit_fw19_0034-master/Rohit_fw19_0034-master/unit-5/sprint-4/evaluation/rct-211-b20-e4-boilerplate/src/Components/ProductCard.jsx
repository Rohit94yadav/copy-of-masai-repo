import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../Redux/action";
import "./productcard.css"

const ProductCard = ({ item }) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete =(id)=>{
        if(window.confirm("Are You Sure")){
            dispatch(deleteProduct(id))
            navigate("/")
        }
    }
    
    return (
        <div data-cy={`product-card-${item.id}`}>
            <div data-cy="product-card-name">{item.name}</div>
            <div data-cy="product-card-category">{item.category}</div>
            <div>
                <img data-cy="product-card-image" src={item.image} alt="Product" style={{width:"170px"}} />
            </div>
            <div data-cy="product-card-price">{item.price}</div>
            <div>
                <div>
                    {/* Add a onClick handler for delete functionality */}
                    <button onClick={()=> handleDelete(item.id)} data-cy="delete-button" className="danger">
                        <img src='./delete.png' alt='delete' width='20px' />
                    </button>

                </div>
                <div>
                    <button data-cy='add-to-cart' className="add-to-cart" onClick={()=> setCount(count+1)} disabled={count === 3}>
                        +
                    </button>
                    <span data-cy='product-quantity'>{item.cartQuantity}{count}</span>
                    <button data-cy='remove-from-cart' className="remove-from-cart" 
                    onClick={()=> setCount(count-1)} disabled={count === 0} >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
