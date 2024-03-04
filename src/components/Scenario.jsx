import ProfessionalBoard from "../components/PrefessionalBoard";
import ShowRoom from "../components/ShowRoom";
import Intro from "../components/Intro";
import Links from "../components/Links";
import Character from "../components/Character";
import Board from "../components/Board";

import { useSelector } from "react-redux";

export default function Scenario() {
  const category = useSelector((state) => state.category);

  return (
    <div className="scenario">
      <Links />

      {category && <Board category={category} />}

      <Character />
    </div>
  );
}
