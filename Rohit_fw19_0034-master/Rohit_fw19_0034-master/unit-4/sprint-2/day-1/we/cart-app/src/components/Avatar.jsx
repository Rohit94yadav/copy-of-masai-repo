function Avatar(props) {
    const { src, name, price } = props;
  
    const style = {
      borderRadius: "1rem",
      display: "flex",
      justifyContent: "flex-end"
    };
  
    const style2 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "60px",
      
    };
  
    const style3 = {
      display: "flex",
      margin: "auto",
      justifyContent: "space-between"
    };
  
    if (props.rounded) {
      style.borderRadius = "50%";
    }
  
    return (
      <div style={style3}>
        <div style={style2}>
          <img style={style} src={src} alt="rohit" width="200px" height="180px" />
          <h2> {name} </h2>
          <h2> ₹{price} </h2>
          <div style={style3}></div>
        </div>
      </div>
    );
  }
  
  export default Avatar;
  