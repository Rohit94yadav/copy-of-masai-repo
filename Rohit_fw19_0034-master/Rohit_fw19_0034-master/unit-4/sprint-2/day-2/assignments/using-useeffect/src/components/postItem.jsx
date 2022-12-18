import style from "./Posts.module.css"


const PostItem=({title,id,body})=>{
    return <li className={style.box}> {id} - {title} {body}</li>
}

export default PostItem;