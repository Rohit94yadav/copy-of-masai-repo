

import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const getCurrentPageUrl = (value)=>{
    value = Number(value);

    if(typeof value === "number" && value<= 0){
        value=1
    }
    if(!value){
        value=1
    }

    return value;
}

const Products = () => {

    const[data,setData] = React.useState([]);
    let [searchParams, setSearchParams] = useSearchParams()
    const [totalCount, setTotalCount] = React.useState(0);       
    const[page, setPage] = React.useState(getCurrentPageUrl
        (searchParams.get("page")) || 1
        );
     
     const[orderBy, setOrderBy] = React.useState("")   
        
    const limit = 2

    const sort = "price";
    const[filterBy, setFilterBy] = React.useState("")

    React.useEffect(()=>{
        let apiUrl;

        if(orderBy && filterBy){
            apiUrl = `http://localhost:3000/product?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderBy}&catagory=${filterBy}`
        }else if(orderBy){
            apiUrl = `http://localhost:3000/product?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderBy}`
        }else if(filterBy){
            apiUrl = `http://localhost:3000/product?_page=${page}&_limit=${limit}&catagory=${filterBy}`
        }
        else{
            apiUrl = `http://localhost:3000/product?_page=${page}&_limit=${limit}`
        }
        

       

        fetch(apiUrl)
        .then((res)=> {
            setTotalCount(Number(res.headers.get("X-Total-Count")))
           return res.json()
        })
        .then((res)=> {
            console.log(res)
            setData(res)
        })

    },[page, orderBy, filterBy])

    React.useEffect(()=>{

        
        let params = {page}
        if(orderBy){
            params.orderBy = orderBy
        }
        if(filterBy){
            params.filterBy = filterBy
        }
        setSearchParams(params)

    },[page, orderBy, filterBy])

  return (
    <div  >
        <div>
            <button onClick={()=> setOrderBy("asc")}>Price Asc</button>
            <button onClick={()=> setOrderBy("desc")}>Price DESC</button>
            <button onClick={()=> setOrderBy("")}>Reset To Default</button>
            <br />
            <button onClick={()=> setFilterBy("Footwear")}>Filter By Footwear</button>
            <button onClick={()=> setFilterBy("Dresses")}>Filter By Dresses</button>
            <button onClick={()=> setFilterBy("")}>Reset</button>

        </div>
      <div >{data.map((el)=>
      <div style={
       { display:"flex",
       margin:"auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        padding:"20px",
        
        border:"0.5px solid lightgrey",
        width: "60%"

    }
      } key={el.id}>
        <img style={{
            width:"250px",
            height: "300px"
        }} src={el.img} alt="image" />
        <h2>{el.name}</h2>
        <h3>{el.price}</h3>
        <Link to={`/products/${el.id}`}>More Details</Link>
      </div>
      )}</div>

<div  style={
       { display:"flex",

        justifyContent: "center",
        gap:"20px",
        padding:"20px",
        alignItems:"center"
}}>

<button disabled={page===1} onClick={()=> setPage(page-1)} >Prev</button>
<button>{page}</button>
<button disabled={page === Math.ceil(totalCount/limit)} onClick={()=> setPage(page+1)} >Next</button>
</div>

    </div>
  )
}

export default Products
