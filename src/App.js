import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      {" "}
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
