import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setBoard } from "../redux/actions.js";
import ProfessionalBoard from "./ProfessionalBoard";
import PersonalBoard from "./PersonalBoard";
import PortfolioBoard from "./PortfolioBoard";

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

      {category === "professional" && <ProfessionalBoard />}
      {category === "personal" && <PersonalBoard />}
      {category === "portfolio" && <PortfolioBoard />}
    </div>
  );
}
