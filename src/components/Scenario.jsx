import ShowRoom from "../components/ShowRoom";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import Character from "../components/Character";
import Board from "../components/Board";
import Console from "../components/Console";

import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Scenario() {
  const category = useSelector((state) => state.category);
  const board = useSelector((state) => state.board);
  const mode = useSelector((state) => state.mode);
  return (
    <div className="scenario">
      <Menu />
      <div className={`veil ${mode !== "stopped" && "disappear"}`}></div>
      {board && <Board category={category} />}
      
      <div className="content">
        <div><Console /></div>
        <div>
          <Character />
        </div>
      </div>
    </div>
  );
}
