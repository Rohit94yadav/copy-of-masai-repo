function Button(props) {
    const { text } = props;
    const style = {
      borderRadius: "5px",
      backgroundColor: "lightblue"
    };
    return <button style={style}> {text} </button>;
  }
  
  export default Button;
  