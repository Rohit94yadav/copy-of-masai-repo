

function Pagination({
  current,
  onChange
}){

  const prev = <button onClick={()=>onChange(current-1)} disabled={current===1}>Prev</button>
  const currentPage = <button>{current}</button>
  const next =  <button onClick={()=>onChange(current+1)} >Next</button>
  return(
    <div>
      {prev}
      {currentPage}
      {next}
    </div>
  )
}

export default Pagination;