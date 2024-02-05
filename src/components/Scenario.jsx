import React, { useEffect, useState } from "react";
import door from "../assets/img/door.png";
import windowImg from "../assets/img/window.png";
import guitar from "../assets/img/guitar.png";
import lamp from "../assets/img/lamp.png";
import plant from "../assets/img/plant.png";
import chair from "../assets/img/chair.png";
import characterBody from "../assets/img/character-body.png";
import characterHead from "../assets/img/character-head.png";
import characterEyes from "../assets/img/character-eyes.png";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";

export default function Scenario({ dialog, setDialog }) {
  const [typeItCloud, setTypeItCloud] = useState(false);

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
      <img className="chair" src={chair} alt="" />
      <img className="guitar" src={guitar} alt="" />
      <div className="character">
        <img className="body" src={characterBody} alt="" />
        <div className="head">
          <img src={characterHead} alt="" />
          <img className="eyes" src={characterEyes} alt="" />
        </div>
      </div>
      <img className="plant" src={plant} alt="" />
      <div className="speech-cloud">
        <TypeIt getBeforeInit={handleType} options={typeItDefault}></TypeIt>
      </div>
    </div>
  );
}
