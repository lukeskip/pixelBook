import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Console from "./routes/Console";
import Interface from "./routes/Interface";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Interface />} />
    </Routes>
  );
}

export default App;
