import { useCallback, useEffect, useState } from "react";
import Searchbar from "./Components/Searchbar";
import countries from "./utils/countries";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let inputText = query.toLowerCase();
      let newSuggestions = countries
        .filter((el) => {
          return el.country.toLowerCase().indexOf(inputText) !== -1
            ? true
            : false;
        })
        .map((el) => el.country);

      setSuggestions(newSuggestions);
    }
  }, [query]);

  return (
    <div className="App">
      <h1>Search Bar</h1>
      <h3>Search Query is {query}</h3>
      <Searchbar suggestions={suggestions} queryHandler={queryHandler} />
    </div>
  );
}
