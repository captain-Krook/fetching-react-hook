import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Bloc from "./components/bloc";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const urldata = "https://jsonplaceholder.typicode.com/users";
    async function fetchDataUser() {
      const response = await fetch(urldata);
      const json = await response.json();
      setData(json);
    }
    fetchDataUser();
  }, []);

  return (
    <div className="App">
      {data.map((element, index) => {
        return <Bloc key={index} data={element} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
