import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { CountryData } from "./Pages/Country_Data/CountryData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<CountryData />} />
      </Routes>
    </div>
  );
}

export default App;
