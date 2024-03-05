import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Scenario from "./components/Scenario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Scenario />} />
    </Routes>
  );
}

export default App;
