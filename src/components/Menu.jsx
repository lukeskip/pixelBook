import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../redux/actions.js";

export default function Links() {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  return (
    <div className="links">
      <ul>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Behance</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
        <li>
          <a href="#">WhatsApp</a>
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
