import "./App.css";
// import parsedData from "./data.js";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    results: [],
  });

  const { results } = data;

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=name,picture&results=48')
    .then( (res) => {
      return res.json();
    })
    .then( (data) => {
      setData(data);
      // console.log("Data from useeffect", data.results);    
    })
  }, []);

  return (
    <div className="App">
      <div id="app">
        <h1>List of users</h1>

        <div className="container">
          <input
            id="filter"
            className="form-control mb-3 form-control-lg"
            placeholder="Type to filter..."
          />
          <div className="users row">
            {results.map((user, i) => {
              const name = `${user.name.title} ${user.name.first} ${user.name.last}`
              return (
                <div className="col-2 user" key={`user-${i}`}>
                  <img src={user.picture.medium} alt="name" />
                  <h3>{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
