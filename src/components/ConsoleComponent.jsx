import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import Bash from "../commands/index.js";

export default function ConsoleComponent({ setDialog }) {
  const bash = new Bash();
  const [terminalData, setTerminalData] = useState([
    "Bienvenido a mi website",
    "Yo soy cheko version 1.0.0",
    "teclea la palabra init y presiona enter",
  ]);

  const handleInput = (input) => {
    bash.run(input, (data) => setDialog(data));
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
    <div className="console">
      <Terminal colorMode={ColorMode.Dark} onInput={handleInput}>
        {terminalData.map((item, index) => {
          return <TerminalOutput key={index}>{item}</TerminalOutput>;
        })}
      </Terminal>
    </div>
  );
}
