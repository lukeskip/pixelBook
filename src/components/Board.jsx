import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setBoard } from "../redux/actions.js";
import PrefessionalBoard from "./PrefessionalBoard";
import PersonalBoard from "./PersonalBoard";

export default function Board({ category }) {
  const [disappear, setDisappear] = useState(false);
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const handleClose = () => {
    setDisappear(true);
    setTimeout(() => {
      dispatch(setCategory(""));
    }, 1000);
  };

  useEffect(() => {
    const handleEnter = (event) => {
      if (event.key === "Enter" || event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, []);

  return (
    <div className={`board ${category} ${disappear && "disappear"}`}>
      <div className="close" onClick={handleClose}>
        x
      </div>

      {category === "professional" && <PrefessionalBoard />}
      {category === "personal" && <PersonalBoard />}
    </div>
  );
}
