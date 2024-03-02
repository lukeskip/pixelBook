import React, { useEffect, useState } from "react";
import TypeIt from "typeit-react";
import { TerminalOutput } from "react-terminal-ui";

export default function TerminalLine({ messages }) {
  const [counter, setCounter] = useState(0);
  const [instanceState, setInstanceState] = useState();

  const array = [];

  return messages.map((item, index) => {
    return <TerminalOutput key={index}>{item}</TerminalOutput>;
  });
}
