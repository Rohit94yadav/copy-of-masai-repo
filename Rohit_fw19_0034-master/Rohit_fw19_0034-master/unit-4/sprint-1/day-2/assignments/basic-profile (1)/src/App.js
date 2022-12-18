import "./styles.css";
import Button from "./components/button";
import Avatar from "./components/avatar";

const users = [
  {
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/103635471?v=4",
    name: "ROHIT",
    rounded: false,
    hideName: false
  },
  {
    id: 2,
    avatar_url:
      "https://imgkub.com/images/2022/07/28/WhatsApp-Image-2022-04-05-at-5.28.07-PM-2.jpg",
    name: "ROHIT YADAV",
    rounded: true,
    hideName: true
  }
];

const useravatar = users.map((user) => {
  return (
    <Avatar
      key={user.id}
      src={user.avatar_url}
      name={user.name}
      rounded={user.rounded}
      hideName={user.hideName}
    />
  );
});

export default function App() {
  return (
    <div>
      {useravatar}

      <Button text="Click Me"></Button>
    </div>
  );
}
