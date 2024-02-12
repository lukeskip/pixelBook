import React from "react";
import characterBody from "../assets/img/character-body.png";
import characterHead from "../assets/img/character-head-short.png";
import characterEyes from "../assets/img/character-eyes.png";
import { useSelector } from "react-redux";

export default function Character() {
  const errorMode = useSelector((state) => state.errorMode);

  return !errorMode ? (
    <div className="character">
      <img className="body" src={characterBody} alt="" />
      <div className="head">
        <img src={characterHead} alt="" />
        <img className="eyes" src={characterEyes} alt="" />
      </div>
    </div>
  ) : (
    <div className="character error">
      <img className="body" src={characterBody} alt="" />
      <div className="head">
        <img src={characterHead} alt="" />
        <img className="eyes" src={characterEyes} alt="" />
      </div>
    </div>
  );
}
