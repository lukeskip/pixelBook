import guitar from "../assets/img/guitar.png";
import ProfessionalBoard from "../components/PrefessionalBoard";
import ShowRoom from "../components/ShowRoom";
import Intro from "../components/Intro";
import Links from "../components/Links";
import Character from "../components/character";

import { useSelector } from "react-redux";

export default function Scenario() {
  const category = useSelector((state) => state.category);

  return (
    <div className="scenario">
      <Links />
      <img src={guitar} className="guitar" alt="" />

      {!category && <Intro />}

      {category === "personal" && (
        <div className={`board ${category === "personal" && "open"}`}>
          <h1>personal</h1>
        </div>
      )}

      {/* {category === "professional" && (
        <div className={`board ${category === "professional" && "open"}`}>
          <ProfessionalBoard />
        </div>
      )}

      {category === "academic" && (
        <div className={`board ${category === "academic" && "open"}`}>
          <h1>academico</h1>
        </div>
      )}

      {category === "showroom" && (
        <div className={`board ${category === "personal" && "open"}`}>
          <ShowRoom />
        </div>
      )} */}

      <Character />
    </div>
  );
}
