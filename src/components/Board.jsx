import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions.js";
import guitar from "../assets/img/guitar.png";

export default function Board({ category }) {
  const [disappear, setDisappear] = React.useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setDisappear(true);
    setTimeout(() => {
      dispatch(setCategory(""));
    }, 2000);
  };
  return (
    <div className={`board ${category} ${disappear && "disappear"}`}>
      <div className="close" onClick={handleClose}></div>
      {category === "personal" && (
        <img src={guitar} className="guitar" alt="" />
      )}
      <h1>{category}</h1>
    </div>
  );
}
