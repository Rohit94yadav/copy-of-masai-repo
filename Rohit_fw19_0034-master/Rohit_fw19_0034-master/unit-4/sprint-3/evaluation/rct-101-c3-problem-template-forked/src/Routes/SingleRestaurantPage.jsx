import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantPage() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getRestaurantById = (id) => {
    return fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
    ).then((res) => res.json());
  };

  const {id} = useParams();

  useEffect(()=>{
setLoading(true);

getRestaurantById(id)
.then((res)=>{
  setLoading(false)
  console.log(res);
  setData(res);
})
.catch((err)=>{
  setLoading(false);
  console.log(err);
});


  },[id])

  if(loading){
    return <h2>Loading...</h2>
  }



  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type: {data.type}</div>
      <div data-testid="restaurant-rating">Rating: {data.rating}</div>
      <div data-testid="restaurant-votes">Votes: {data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price: {data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={data.image} alt="img" />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
