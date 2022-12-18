import React from 'react'
interface ButtonProps{
    buttonText: string,
    handleClick: ()=> void
}
const Button = (props : ButtonProps) => {
    const {buttonText, handleClick} = props;

  return (
    <div>

    <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default Button
