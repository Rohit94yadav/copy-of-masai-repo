import { useState } from "react";

function Pagination() {

  const [page, setPage]= useState(1);

  const handlePage =(changeBy)=>{
    setPage(page+changeBy)
    handleFetchData(page+changeBy)
  }


  const prev = <button onClick={()=>handlePage(-1)} disabled={page===1} data-testid="prev-page">PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button onClick={()=>handlePage(1)} data-testid="next-page">NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">10</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
