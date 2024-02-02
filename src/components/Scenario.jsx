import React from "react";
import door from "../assets/img/door.png";
import windowImg from "../assets/img/window.png";
import guitar from "../assets/img/guitar.png";
import lamp from "../assets/img/lamp.png";
import plant from "../assets/img/plant.png";
import chair from "../assets/img/chair.png";
import character from "../assets/img/character.png";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";

export default function Scenario() {
  return (
    <div className="scenario">
      <img className="door" src={door} alt="" />
      <img className="window" src={windowImg} alt="" />
      <img className="lamp" src={lamp} alt="" />
      <img className="chair" src={chair} alt="" />
      <img className="guitar" src={guitar} alt="" />
      <img className="character" src={character} alt="" />
      <img className="plant" src={plant} alt="" />
      <div className="speech-cloud">
        <TypeIt options={typeItDefault}>Estos son los diálogos</TypeIt>
      </div>
    </div>
  );
}
