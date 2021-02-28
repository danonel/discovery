import React, { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  function createPlaylist() {
    console.log(query);
  }

  return (
    <div className="container">
      <div>
        <h1>Discover your new favorite playlist</h1>
        <label htmlFor="input">Enter an artist</label>

        <input
          name="input"
          type="text"
          placeholder="Daft Punk"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={createPlaylist}>Discovery!</button>
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default App;
