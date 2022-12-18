import "./App.css";
 import data from "./db.json"
 
 import UserDetails from "./components/UserDetails";
import {  useState } from "react";

//  const userdata = data.map((user) => {
//   return (
//     <UserDetails
//       key={user.id}
//       src={user.avatar}
//       first_name={user.first_name}
//       last_name={user.last_name}
//       address = {user.address}
//       karma={user.karma}
//       followers = {user.followers}
//       posts={user.posts}
//       is_following={user.is_following}
      
//     />
//   );
// });

function App() {
  const [post, setPost] = useState(data);

  const handleAscending=()=>{
    const res = post.sort(function (a, b){
      if(a.first_name>b.first_name) return 1;
      if(a.first_name<b.first_name) return -1;
      return 0;
    })
    setPost([...res]);
  };

  const handleDescending=()=>{
    const res = post.sort(function (a, b){
      if(a.first_name>b.first_name) return -1;
      if(a.first_name<b.first_name) return 1;
      return 0;
    })
    setPost([...res]);
  };
  
 

  return (
    <div className="App" data-testid = 'app'>
      <button onClick={handleAscending}  data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button onClick={handleDescending}  data-testid = 'sort-desc-btn'>Sort by Desc</button>
    { post.map((user) => (
 
    <UserDetails
      key={user.id}
      src={user.avatar}
      first_name={user.first_name}
      last_name={user.last_name}
      address = {user.address}
      karma={user.karma}
      followers = {user.followers}
      posts={user.posts}
      is_following={user.is_following}
      
    />
 
     ))};
    </div>
  );
}

export default App;
