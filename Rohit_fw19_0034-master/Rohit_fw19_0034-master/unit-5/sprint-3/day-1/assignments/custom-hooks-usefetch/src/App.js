import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    `https://api.github.com/users?q=Masai`
  );
  console.log(data);
  return (
    <div className="App">
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Data Not Found !"}</h1>
      <div>
        {data &&
          data.map((el) => {
            return <h2 key={el.id}>{el.login}</h2>;
          })}
      </div>
    </div>
  );
}
