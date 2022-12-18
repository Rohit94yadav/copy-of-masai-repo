

import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/ContextProvider'

const getStyle =(theme)=>
    theme === "dark"
    ?{
        color:"white",
        background:"black"
    }:
    {
        color:"black",
        background:"white"
    };


export default function ToggleComponent() {

    const context = useContext(AppContext);

    const {toggleTheme, theme} = context

    const style = getStyle(theme);

  return  <button style={style} onClick={toggleTheme}>Toggle</button>
}


