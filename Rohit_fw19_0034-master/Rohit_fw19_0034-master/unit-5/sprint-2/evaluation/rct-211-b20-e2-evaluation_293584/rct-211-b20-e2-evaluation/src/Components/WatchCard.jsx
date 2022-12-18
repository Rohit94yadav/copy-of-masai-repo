import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getWatchesData } from "../Redux/AppReducer/action";

const WatchCard = ({ id }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const watches = useSelector((store) => store.AppReducer.watches);

  const location = useLocation();

  useEffect(() => {
    if (location || watches.length === 0) {
      const category = searchParams.getAll("category");

      const queryParams = {
        params: {
          category: category,
        },
      };
      dispatch(getWatchesData(queryParams));
    }
  }, [location]);

  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)",border:"1px solid red",margin:"auto",gap:"30px"}} data-testid={`watch-card-wrapper-${id}`}>
      {watches.length > 0 &&
        watches.map((el) => {
          return (
            <Link to={`/watches/${el.id}`}>
            <div  key={el.id}>
              <div>
                <img style={{width:"180px", height:"180px"}} data-testid="watch-card-image" src={el.image} alt="" />
              </div>
              <div>
                <div data-testid="watch-name">{el.name}</div>
                <div data-testid="watch-category">{el.category}</div>
              </div>
            </div>
            </Link>
          );
        })}
    </div>
  );
};

export default WatchCard;
