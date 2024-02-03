import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

export default function ConsoleComponent({ setDialog }) {
  const [terminalData, setTerminalData] = useState([
    "una frase",
    "otra frase",
    "y la ultima frase",
  ]);

  const handleInput = (input) => {
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
