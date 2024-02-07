import React, { useState, useEffect } from "react";
import TerminalLine from "./TerminalLine";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import Bash from "../commands/index.js";
import { useSelector, useDispatch } from "react-redux";
import { setDialog, setTerminal } from "../redux/actions.js";
import welcome from "../utils/welcome.js";

export default function ConsoleComponent() {
  const dialog = useSelector((state) => state.dialog);
  const consoleOpen = useSelector((state) => state.consoleOpen);
  const terminalData = useSelector((state) => state.terminalData);
  const dispatch = useDispatch();
  const bash = new Bash(dispatch);

  const handleInput = (input) => {
    dispatch(setTerminal(input));
    bash.run(input);
  };

  useEffect(() => {
    if (terminalData && terminalData.length > 5) {
      setTerminalData([]);
    }

    return () => {
      terminalData;
    };
  }, [terminalData]);

  return (
    <div className={`console ${consoleOpen}`}>
      <Terminal colorMode={ColorMode.Dark} onInput={handleInput}>
        <TerminalOutput>
          {terminalData ? <TerminalLine messages={terminalData} /> : welcome}
        </TerminalOutput>
      </Terminal>
    </div>
  );
}
