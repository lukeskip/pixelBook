import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import Bash from "../commands/index.js";
import { useSelector, useDispatch } from "react-redux";
import { setDialog } from "../redux/actions.js";

export default function ConsoleComponent() {
  const bash = new Bash();
  const dialog = useSelector((state) => state.dialog);
  const consoleOpen = useSelector((state) => state.consoleOpen);
  const dispatch = useDispatch();
  const [terminalData, setTerminalData] = useState([
    "Bienvenido a mi website",
    String.raw`
      ________         __            ______                _      
      / ____/ /_  ___  / /______     / ________ ___________(_____ _
    / /   / __ \/ _ \/ //_/ __ \   / / __/ __  / ___/ ___/ / __  /
    / /___/ / / /  __/ ,< / /_/ /  / /_/ / /_/ / /  / /__/ / /_/ / 
    \____/_/ /_/\___/_/|_|\____/   \____/\__,_/_/   \___/_/\__,_/  
                                                                  
  `,
    "version 1.0.0",
    "teclea la palabra init y presiona enter",
  ]);

  const handleInput = (input) => {
    bash.run(input, dispatch);
    setTerminalData([...terminalData, input]);
  };

  useEffect(() => {
    if (terminalData.length > 5) {
      setTerminalData([]);
    }

    return () => {
      terminalData;
    };
  }, [terminalData]);

  return (
    <div className={`console ${consoleOpen}`}>
      <Terminal colorMode={ColorMode.Dark} onInput={handleInput}>
        {terminalData.map((item, index) => {
          return <TerminalOutput key={index}>{item}</TerminalOutput>;
        })}
      </Terminal>
    </div>
  );
}
