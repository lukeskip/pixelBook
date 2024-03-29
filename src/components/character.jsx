import React, { useState, useEffect } from "react";
import characterBody from "../assets/img/character-body.png";
import characterHead from "../assets/img/character-head-short.png";
import characterHeadError from "../assets/img/character-head-error.png";
import characterEyes from "../assets/img/character-eyes.png";
import { useSelector, useDispatch } from "react-redux";
import strings from "../utils/strings.js";
import { setBoard } from "../redux/actions.js";

export default function Character() {
  const errorMode = useSelector((state) => state.errorMode);
  const dialog = useSelector((state) => state.dialog);
  const lang = useSelector((state) => state.lang);
  const board = useSelector((state) => state.board);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const handleBoardOpen = () => {
    console.log("board");
    dispatch(setBoard(true));
  };

  const getDialog = () => {
    if (dialog[counter]) {
      return dialog[counter] + (dialog[counter + 1] ? "..." : "");
    } else {
      return false;
    }
  };

  useEffect(() => {
    setCounter(0);
  }, [dialog]);

  return (
    <div className="character">
      <img className="body" src={characterBody} alt="" />
      <div className="head">
        <img src={errorMode ? characterHeadError : characterHead} alt="" />
        <img className="eyes" src={characterEyes} alt="" />
      </div>

      {getDialog() && (
        <div
          className={`speech-cloud ${dialog && "active"}`}
          onClick={() => setCounter(counter + 1)}
        >
          {getDialog()}
        </div>
      )}
      {dialog[counter + 1] && (
        <div className="instructions">{strings[lang].continue}</div>
      )}
    </div>
  );
}
