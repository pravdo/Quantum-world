import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
  };

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
