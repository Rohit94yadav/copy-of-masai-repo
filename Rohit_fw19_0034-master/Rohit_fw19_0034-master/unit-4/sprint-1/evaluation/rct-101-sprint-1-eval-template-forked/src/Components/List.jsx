import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {

  const [list, setList]= useState([]);

  const handleList = (text)=>{

    const newItem ={
      title: text,
      status: false,
      id: Date.now() + text
    };
    setList([...list, newItem]);
   
  }
  const handleDelete =(id)=>{
    setList(list.filter((list)=>list.id !== id));
  }

  return (
    <div>
      <AddItem handleList={handleList}/>

      {list.map((el)=>
      
      <ListItem 
      key = {el.id}
      title = {el.title}
      status = {el.status}
      handleDelete = {()=>handleDelete(el.id)}
      
      />
      
      )


      }

    </div>
  );
}

export default List;
