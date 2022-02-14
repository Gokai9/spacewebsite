import { Routes, Route } from "react-router-dom";
import "./App.css";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Header from "./components/Header";
import Home from "./components/Home";
import Technology from "./components/Technology";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination destinations={data.destinations} />}
        />
        <Route path="/crew" element={<Crew crews={data.crew} />} />
        <Route
          path="/technology"
          element={<Technology technology={data.technology} />}
        />
      </Routes>
    </div>
  );
}

export default App;
