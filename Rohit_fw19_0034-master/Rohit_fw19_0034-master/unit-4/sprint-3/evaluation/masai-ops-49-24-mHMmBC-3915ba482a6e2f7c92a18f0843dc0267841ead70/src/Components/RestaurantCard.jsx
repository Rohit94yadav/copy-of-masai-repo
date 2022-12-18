import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RestaurantCard() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    
  
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
    .then((res)=>{
      res.json()
    })
    .then((res)=>{
      console.log(res)
      setData(res)
    })
  
  },[])


  return (
    <div> {data.map((el)=>

    
    <tr data-testid="item">
      
      
      <td>
        <Link data-testid="name"></Link>
      </td>
      <td data-testid="rating"></td>
      <td data-testid="type"></td>
      <td data-testid="price"></td>
       
    </tr>
    )}
    </div>
  );
}
