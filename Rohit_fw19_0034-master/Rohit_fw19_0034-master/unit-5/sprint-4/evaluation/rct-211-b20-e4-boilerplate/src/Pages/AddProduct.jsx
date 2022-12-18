import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from  "react-redux";
import { addProduct } from "../Redux/action";
const AddProduct = () => {

    const [state, setState] = useState({
        name: "",
        category:"",
        image:"",
        price:"",
        cartQuantity:0,
        
    })

    const[error, setError] = useState("");
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const {name, category, image, price} = state;

    const handleInputChange =(e)=>{
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !category || !image || !price){
            setError("Please fill every input field")
        }else{
            dispatch(addProduct(state));
            navigate("/")
            setError("");
        }
    }

    return (
        <div>
            <h3>Add Product</h3>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <div
                className="add-product-wrapper">
                    <form onSubmit={handleSubmit} >
                <div className="form-element-div">
                    <label className="form-label">Product title</label>
                    <input data-cy="add-product-title" type="text" value={name} name="name" onChange={handleInputChange} />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Category</label>
                    <select data-cy="add-product-category" value={category} name="category" onChange={handleInputChange} >
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Image</label>
                    <input
                        data-cy="add-product-image"
                        type="url"
                        placeholder="Image URL"
                        value={image} name="image" onChange={handleInputChange}
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Price</label>
                    <input data-cy="add-product-price" type="text" value={price} name="price" onChange={handleInputChange}/>
                </div>
                <div style={{ textAlign: "right" }}>
                    <button type="submit" data-cy="add-product-button">Add</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
