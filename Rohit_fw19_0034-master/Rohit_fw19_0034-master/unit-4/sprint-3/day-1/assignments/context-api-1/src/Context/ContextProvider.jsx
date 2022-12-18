import React from "react";
import { useState } from "react";
import { useContext } from "react";

export const AppContext = React.createContext();
const {Provider}= AppContext;

export default function AppContextProviderComponent(props){

    const [theme, setTheme] = useState("dark");

    const toggleTheme=()=>{
        setTheme(theme==="dark"?"light" : "dark");
    }

    

    return (
        <Provider value ={{theme:theme, toggleTheme:toggleTheme}}>
            {props.children}
        </Provider>
    );
}