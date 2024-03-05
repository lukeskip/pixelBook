import React, { useState, useEffect } from "react";
import TerminalLine from "./TerminalLine";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import Bash from "../commands/Bash.js";
import { useSelector, useDispatch } from "react-redux";
import { setDialog, setTerminal, setBash } from "../redux/actions.js";
import Intro from "./Intro";

export default function ConsoleComponent() {
  const dialog = useSelector((state) => state.dialog);
  const consoleOpen = useSelector((state) => state.consoleOpen);
  const terminalData = useSelector((state) => state.terminalData);
  const prompt = useSelector((state) => state.prompt);
  const mode = useSelector((state) => state.mode);
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const bash = useSelector((state) => state.bash);
  const board = useSelector((state) => state.board);

  const handleInput = (input) => {
    dispatch(setTerminal([input]));
    bash.run(input);
  };

  useEffect(() => {
    if (bash) {
      bash.lang(lang);
    }
  }, [bash, lang]);

  useEffect(() => {
    dispatch(setBash(new Bash(dispatch, lang)));
  }, []);

  return (
    <>
      <div className={`console ${mode}`}>
        {!board && (
          <>
            <Intro />
            <Terminal
              prompt={prompt}
              colorMode={ColorMode.Dark}
              onInput={handleInput}
            >
              <TerminalLine messages={terminalData}></TerminalLine>
            </Terminal>
          </>
        )}
      </div>
    </>
  );
}
