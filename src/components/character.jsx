import React, { useState, useEffect } from "react";
import characterBody from "../assets/img/character-body.png";
import characterHead from "../assets/img/character-head-short.png";
import characterHeadError from "../assets/img/character-head-error.png";
import characterBodyError from "../assets/img/character-body-error.png";
import desktop from "../assets/img/desktop.png";
import characterEyes from "../assets/img/character-eyes.png";
import antenas from "../assets/img/antenas.png";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import { useSelector } from "react-redux";
import strings from "../utils/strings.js";

export default function Character() {
  const errorMode = useSelector((state) => state.errorMode);
  const dialog = useSelector((state) => state.dialog);
  const language = useSelector((state) => state.lang);
  const [counter, setCounter] = useState(0);

  const getDialog = () => {
    if (dialog[counter]) {
      return dialog[counter];
    } else {
      return false;
    }
  };

  useEffect(() => {
    setCounter(0);
  }, [dialog]);

  return (
    <div className="character" onClick={() => setCounter(counter + 1)}>
      <img className="body" src={characterBody} alt="" />
      <div className="head">
        {errorMode && <img className="antenas" src={antenas} alt="" />}

        <img src={errorMode ? characterHeadError : characterHead} alt="" />
        <img className="eyes" src={characterEyes} alt="" />
      </div>
      <div className="instructions">{strings[language].continue}</div>
      {getDialog() && (
        <div className={`speech-cloud ${dialog && "active"}`}>
          {getDialog()}
        </div>
      )}
    </div>
  );
}
