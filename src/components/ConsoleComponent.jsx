import React, { useState } from "react";
import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

export default function ConsoleComponent() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>
      <TypeIt options={typeItDefault}>
        Inicia tecleando alguno de los siguientes comandos{" "}
      </TypeIt>
    </TerminalOutput>,
  ]);
  return (
    <div className="console">
      <Terminal
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) =>
          console.log(`New terminal input received: '${terminalInput}'`)
        }
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
