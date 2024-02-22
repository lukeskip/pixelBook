import React, { useState, useEffect } from "react";
import characterBody from "../assets/img/character-body.png";
import characterHead from "../assets/img/character-head-short.png";
import characterHeadError from "../assets/img/character-head-error.png";
import characterBodyError from "../assets/img/character-body-error.png";
import characterEyes from "../assets/img/character-eyes.png";
import antenas from "../assets/img/antenas.png";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import { useSelector } from "react-redux";

export default function Character() {
  const errorMode = useSelector((state) => state.errorMode);
  const dialog = useSelector((state) => state.dialog);
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

    console.log(errorMode);

    return () => {
      dialog;
    };
  }, [dialog]);

  return !errorMode ? (
    <div className="character">
      <img className="body" src={characterBody} alt="" />
      <div className="head">
        {errorMode && <img className="antenas" src={antenas} alt="" />}

        <img src={errorMode ? characterHeadError : characterHead} alt="" />
        <img className="eyes" src={characterEyes} alt="" />
      </div>

      <div className={`speech-cloud ${dialog && "active"}`}>
        <TypeIt getBeforeInit={handleType} options={typeItDefault}></TypeIt>
      </div>
    </div>
  ) : (
    <div className="character error">
      <img
        className="body"
        src={errorMode ? characterBody : characterBodyError}
        alt=""
      />
      <div className="head">
        <img src={characterHead} alt="" />
        <img className="eyes" src={characterEyes} alt="" />
      </div>
    </div>
  );
}
