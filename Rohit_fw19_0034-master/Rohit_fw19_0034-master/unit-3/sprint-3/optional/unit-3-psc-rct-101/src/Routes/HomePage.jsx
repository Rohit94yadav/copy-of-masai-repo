import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCities } from "../Components/Api/CityApi";

import CityTable from "../Components/CityTable";
import Pagination from "../Components/Pagination";

function getPage(value) {
  value = Number(value);
  if (!value || value < 1) {
    value = 1;
  }
  return value;
}

const getSort = (string) =>
  ["ASC", "asc", "DESC", "desc"].includes(string) ? string : "asc";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPage(searchParams.get("page"));
  const initSort = getSort(searchParams.get("sortOrder"));
  const [page, setPage] = useState(initPage);
  const [sortByPopulation, setSortByPopulation] = useState(initSort);

  useEffect(() => {
    setLoading(true);
    getCities({
      sortByPopulation,
      page
    })
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [sortByPopulation, page]);

  useEffect(() => {
    setSearchParams({
      page,
      sortByPopulation
    });
  }, [page, sortByPopulation, setSearchParams]);
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <div>
      <div>
        <button
          onClick={() =>
            setSortByPopulation(sortByPopulation === "ASC" ? "DESC" : "ASC")
          }
        >
          Sort In {sortByPopulation === "ASC" ? "DESC" : "ASC"}
        </button>
      </div>
      {loading ? <h2>Loading...</h2> : <CityTable data={data} />}
      <Pagination current={page} onChange={(page) => setPage(page)} />
    </div>
  );
}

export default HomePage;
