import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  // console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div>
      <Header title="Quantum World" />
      <Search
        word={word}
        setWord={setWord}
        handleSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
};

export default App;
