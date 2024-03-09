import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Scenario from "./components/Scenario";
import Project from "./routes/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Scenario />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  );
}

export default App;
