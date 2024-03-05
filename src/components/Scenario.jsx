import ProfessionalBoard from "../components/PrefessionalBoard";
import ShowRoom from "../components/ShowRoom";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import Character from "../components/Character";
import Board from "../components/Board";

import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Scenario() {
  const category = useSelector((state) => state.category);
  const mode = useSelector((state) => state.mode);
  return (
    <div className="scenario">
      <div className={`veil ${mode !== "stopped" && "disappear"}`}></div>
      <Menu />

      {category && <Board category={category} />}

      <Character />
    </div>
  );
}
