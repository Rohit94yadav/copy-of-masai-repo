import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

function RestaurantPage() {
  // if (true) {
  //   return <Loader />;
  // }
  
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
    <div>
    {data.map((el)=> <div data-testid="restaurant-container"> <img data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">name</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type"></b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating"></b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes"></b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price"></b>
        </div>
      </div>
      <div></div>
     
      </div>
       )}
       </div>
  );
}
export default RestaurantPage;
