import React, { useEffect, useState } from "react";
import door from "../assets/img/door.png";
import windowImg from "../assets/img/window.png";
import guitar from "../assets/img/guitar.png";
import lamp from "../assets/img/lamp.png";
import plant from "../assets/img/plant.png";
import chair from "../assets/img/chair.png";
import cloudTerms from "../assets/img/cloud-terms.png";
import ProfessionalBoard from "../components/PrefessionalBoard";
import ShowRoom from "../components/ShowRoom";
import Intro from "../components/Intro";

import Character from "../components/character";
import desktop from "../assets/img/desktop.png";

import { useSelector } from "react-redux";

export default function Scenario() {
  const category = useSelector((state) => state.category);

  return (
    <div className="scenario">
      <img src={guitar} className="guitar" alt="" />
      <Intro />
      <div className={`board ${category === "personal" && "open"}`}>
        <h1>personal</h1>
      </div>
      <div className={`board ${category === "professional" && "open"}`}>
        <ProfessionalBoard />
      </div>
      <div className={`board ${category === "academic" && "open"}`}>
        <h1>academico</h1>
      </div>
      <div className={`board ${category === "showroom" && "open"}`}>
        <ShowRoom />
      </div>

      <Character />

      {/* <img className="plant" src={plant} alt="" /> */}
    </div>
  );
}
