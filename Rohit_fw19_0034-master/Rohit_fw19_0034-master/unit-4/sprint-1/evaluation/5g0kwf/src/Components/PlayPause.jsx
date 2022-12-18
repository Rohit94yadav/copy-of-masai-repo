import { useState } from "react";


function PlayPause(){

  const [state, setState] = useState("The state is paused");
  const [text, setText] = useState("paused")

  function handleClick(){
    setText("playing");
    setState("The state is playing")
  }



  return(
    <div>
      <h1>{state}</h1>
      <button  onClick={handleClick}>{text}</button>
    </div>
  )
}

export default PlayPause;
