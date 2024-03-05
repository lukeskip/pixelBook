import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../redux/actions.js";
import github from "../assets/img/icon-github.png";
import whatsapp from "../assets/img/icon-whatsapp.png";
import behance from "../assets/img/icon-behance.png";
import email from "../assets/img/icon-email.png";

export default function Menu() {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="https://github.com/lukeskip" target="_blank">
            <img className="icon" src={github} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/chekogarciagtz" target="_blank">
            <img className="icon" src={behance} alt="" />
          </a>
        </li>
        <li>
          <a href="mailto:contacto@chekogarcia.com.mx" target="_blank">
            <img className="icon" src={email} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon" src={whatsapp} alt="" />
          </a>
        </li>
        {lang !== "es" && (
          <li>
            <a href="#" onClick={() => dispatch(setLang("es"))}>
              🇲🇽
            </a>
          </li>
        )}

        {lang !== "en" && (
          <li>
            <a href="#" onClick={() => dispatch(setLang("en"))}>
              🇺🇸
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
