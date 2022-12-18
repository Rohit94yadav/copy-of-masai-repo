function Avatar(props) {
  const { src, name } = props;

  const style = {
    borderRadius: "1rem"
  };

  const style2 = {
    display: "none"
  };

  if (props.rounded) {
    style.borderRadius = "50%";
  }

  if (props.hideName) {
    style2.display = "flex";
  }

  return (
    <div>
      <img style={style} src={src} alt="rohit" width="200px" />

      <h2 style={style2}> {name} </h2>
    </div>
  );
}

export default Avatar;
