import { useEffect } from "react";
import { useState } from "react";
import PostItem from "./postItem";
import style from "./Posts.module.css"

function getData({page}){
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(res=>{
     return res.json()
    })
  }

function Posts(){
    const [posts, setPost] = useState([]);
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);

    useEffect(()=>{
        handleFetchData()
    },[])

    const handleFetchData = async (page=1)=>{
        try{
            setLoading(true)
            const data = await getData({page});
            setPost(data)
            setLoading(false)
        }
        catch(err){
            setLoading(false)
        }
    }
console.log(posts)

const handlePageChange=(changeBy)=>{
    setPage(page+changeBy)
    handleFetchData(page+changeBy)
}

    return(
        <div >
            <h1>POSTS</h1>
            {loading && <h2>Loading...</h2>}
            
            <ul >
                {posts.map(el=><PostItem  id= {el.id} title={el.title} body={el.body}/>)}
                
            </ul>
            <button onClick={()=>handlePageChange(-1)} disabled= {page===1}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>handlePageChange(1)} >Next</button>
        </div>
    )
}

export default Posts;