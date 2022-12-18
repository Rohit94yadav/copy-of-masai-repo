import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Counter from "./Counter/Counter";

const style3 = {
  display: "flex",
  margin: "auto",
  justifyContent: "space-between"
};

const Card = ({ user, setTotal }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (val) => {
    setCounter((prev) => prev + val);

    const price = val * user.price;

    setTotal((prev) => prev + price);
  };

  return (
    <div style={style3}>
      <Avatar
        key={user.id}
        src={user.avatar_url}
        name={user.name}
        price={user.price}
      />
      <Counter counter={counter} setCounter={handleCounter} />
    </div>
  );
};

export default Card;
