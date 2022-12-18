function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination() {
  let pages = [1].map((a, i) => <button data-testid="page-btn">1</button>);
  return <div>{pages}</div>;
}

export default Pagination;
