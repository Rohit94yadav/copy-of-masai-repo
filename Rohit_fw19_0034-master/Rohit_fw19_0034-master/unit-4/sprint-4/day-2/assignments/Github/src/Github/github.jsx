import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initial = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_sucess":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "Fetch_Error":
      return {
        loading: false,
        post: {},
        error: "Something Went Wrong"
      };
    default:
      return state;
  }
};

function Datafetch() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [data, setdata] = React.useState([]);
  const[page,setpage]=React.useState(1)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users`)
      .then((res) => {
        setdata(res.data);
        dispatch({ type: "Fetch_sucess", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "Fetch_Error" });
      });
  }, []);

  return (
    <div>
      {state.loading
        ? "Loading"
        : state.post?.map((prod) => (
            <div
              key={prod.id}
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                display: "flex"
              }}
            >
              <img
                src={prod.avatar_url}
                alt="product"
                width="250"
                height="200"
              />
              <h1>Name: {prod.login}</h1>
            </div>
          ))}
      {state.error ? state.error : null}
    </div>
  );
}
export default Datafetch;
