// import { useState, useEffect } from "react";
// import Addtodos from "./Addtodo";
// import { getTodos } from "./api";
// import { addnewtodos } from "./api";
// import { deletetodos } from "./api";

const UserRow = ({name,gender,role,maritalStatus,id})=>{
    
    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{role}</td>
                <td>{maritalStatus}</td> 
            </tr>
      
       
        </>
    )
}
export {UserRow}