import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import { Link } from "react-router-dom";
function App() {
  const initialValue = [
    {
      item: {},
    },
  ];
  const [people, setPeople] = useState(initialValue);
  return (
    <>
      {" "}
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home people={people} setPeople={setPeople} />}
        />
        <Route
          path="/favorites"
          element={<Favorites people={people} setPeople={setPeople} />}
        />
      </Routes>
    </>
  );
}

export default App;
