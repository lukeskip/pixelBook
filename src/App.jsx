import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Console from "./routes/Console";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Console />} />
    </Routes>
  );
}

export default App;
