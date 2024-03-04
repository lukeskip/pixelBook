import React, { useState, useEffect } from "react";
import TerminalLine from "./TerminalLine";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import Bash from "../commands/Bash.js";
import { useSelector, useDispatch } from "react-redux";
import { setDialog, setTerminal } from "../redux/actions.js";
import Intro from "./Intro";

export default function ConsoleComponent() {
  const dialog = useSelector((state) => state.dialog);
  const consoleOpen = useSelector((state) => state.consoleOpen);
  const terminalData = useSelector((state) => state.terminalData);
  const prompt = useSelector((state) => state.prompt);
  const mode = useSelector((state) => state.mode);
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const [bash, setBash] = useState(new Bash(dispatch, lang));

  const handleInput = (input) => {
    dispatch(setTerminal([input]));
    bash.run(input);
  };
  return (
    <>
      <div className={`console ${consoleOpen} ${mode}`}>
        <Terminal
          prompt={prompt}
          colorMode={ColorMode.Dark}
          onInput={handleInput}
        >
          <TerminalLine messages={terminalData}></TerminalLine>
        </Terminal>
      </div>
    </>
  );
}
