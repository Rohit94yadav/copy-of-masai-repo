import {useState} from "react";

function AddItem({handleList}) {

  const [text, setText]= useState("");
  const handleChange = (e)=>{
    setText(e.target.value);
  }

  const onClick = ()=>{
    handleList(text);
    setText("");
  }

  return (
    <div>
      <input onChange = {handleChange} value={text} data-testid="input" placeholder="add something" />
      <button  onClick = {onClick} data-testid="add-btn">ADD</button>
    </div>
  );
}

export default AddItem;
