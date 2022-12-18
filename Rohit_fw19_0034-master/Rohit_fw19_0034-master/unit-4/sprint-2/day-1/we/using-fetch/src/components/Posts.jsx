import { useState } from "react";
import style from "./Posts.module.css"

function getData(page=1){
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`).then(res=>{
     return res.json()
    })
  }

function Posts(){
    const [posts, setPost] = useState([]);

    const handleFetchData = async ()=>{
        try{
            const data = await getData();
            setPost(data)
        }
        catch(err){

        }
    }
console.log(posts)
    return(
        <div >
            <h1>POSTS</h1>
            <button onClick={handleFetchData}>GET POSTS</button>
            <ul >
                {posts.map(el=><li className={style.box} key={el.id}> {el.title}<h2>{el.body}</h2></li>)}
                
            </ul>
        </div>
    )
}

export default Posts;