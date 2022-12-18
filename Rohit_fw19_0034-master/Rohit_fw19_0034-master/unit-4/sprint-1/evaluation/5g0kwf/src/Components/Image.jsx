

function Image(props){

  const{title, src, alt, width, height} = props;

  return(
    <div>
      <h2>{title}</h2>
      <img src={src} alt={alt} width= {width} height={height} />

    </div>


  )
}

export default Image;
