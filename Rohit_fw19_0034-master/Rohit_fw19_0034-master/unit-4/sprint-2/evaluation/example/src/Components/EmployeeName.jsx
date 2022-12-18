import React, { useEffect, useState } from "react";





export default function EmployeeName() {

  const [posts, setPost] = useState([]);


  useEffect(()=>{
    const getData = async (page=1) => {
      try {
        const response = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?_limit=10&_page=${page}`
        );
        
        let data = await response.json();
        setPost(data.data);
        console.log("hi",data)
        
      } catch(err) {
       
        setPost(null);
      } 
    }
    getData()
  },[])

  return <div data-testid="employee-name"> 
  {posts.map((el) => <h2 > {el.name}</h2>)}
   </div>;
}
