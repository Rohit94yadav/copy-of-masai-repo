import { useState } from "react";
import Card from "./components/Card";
import "./styles.css";

const users = [
  {
    id: 1,
    name: "Noodles",
    avatar_url:
      "https://static.toiimg.com/thumb/75356205.cms?width=1200&height=900",
    price: 30
  },
  {
    id: 2,
    name: "Biryani",
    avatar_url:
      "https://static.toiimg.com/thumb/53098310.cms?imgsize=579584&width=800&height=800",
    price: 20
  },
  {
    id: 3,
    name: "Chips",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWm-Be499iNC1FBA6vhV2RfgFs64ph34cc5A&usqp=CAU",
    price: 40
  }
];

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      {users.map((usr) => (
        <Card user={usr} total={total} setTotal={setTotal} />
      ))}
      <div>
        <h2>Total:-{total}</h2>
        </div>
    </div>
  );
}
