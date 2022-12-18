import React from "react";

const TodoItems = ({ id, title, status, handleToggle, handleDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        border: "1px solid lightgrey",
        marginTop: "13px"
      }}
    >
      <div>
        <h2> {title}</h2>
      </div>
      <div>
        <h3>{status ? "true" : "false"}</h3>
      </div>
      <button onClick={() => handleToggle(id)}>Toggle Status</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

// const checkEquality = (prevProps, currentProps)=>{
//   return(
//     prevProps.status === currentProps.status &&
//     prevProps.title === currentProps.title
//   )
// }

export default React.memo(TodoItems);
