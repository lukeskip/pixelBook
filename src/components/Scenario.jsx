import React, { useEffect, useState } from "react";
import door from "../assets/img/door.png";
import windowImg from "../assets/img/window.png";
import guitar from "../assets/img/guitar.png";
import lamp from "../assets/img/lamp.png";
import plant from "../assets/img/plant.png";
import chair from "../assets/img/chair.png";

import Character from "../components/character";
import desktop from "../assets/img/desktop.png";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import { useSelector } from "react-redux";

export default function Scenario() {
  const [typeItCloud, setTypeItCloud] = useState(false);
  const dialog = useSelector((state) => state.dialog);
  const category = useSelector((state) => state.category);

  const handleType = (instance) => {
    setTypeItCloud(instance);
    return instance;
  };

  const typeCreate = () => {
    return (
      <TypeIt getAfterInit={handleType} options={typeItDefault}>
        {dialog}
      </TypeIt>
    );
  };

  useEffect(() => {
    if (typeItCloud) {
      typeItCloud.type(dialog).flush();
      typeItCloud.reset().go();
    }

    return () => {
      dialog;
    };
  }, [dialog]);

  return (
    <div className="scenario">
      <img className="door" src={door} alt="" />
      <img className="window" src={windowImg} alt="" />
      <img className="lamp" src={lamp} alt="" />
      <img className="desktop" src={desktop} alt="" />
      <img className="guitar" src={guitar} alt="" />

      <Character />

      <img className="plant" src={plant} alt="" />
      <div className="speech-cloud">
        <TypeIt getBeforeInit={handleType} options={typeItDefault}></TypeIt>
      </div>

      <div className={`board ${category === "personal" && "open"}`}>
        <h1>personal</h1>
      </div>
      <div className={`board ${category === "professional" && "open"}`}>
        <h1>perofesional</h1>
      </div>
      <div className={`board ${category === "academic" && "open"}`}>
        <h1>academico</h1>
      </div>
    </div>
  );
}
