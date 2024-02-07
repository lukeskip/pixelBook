import React, { useEffect, useState } from "react";
import TypeIt from "typeit-react";
import { TerminalOutput } from "react-terminal-ui";

export default function TerminalLine({ messages }) {
  const [counter, setCounter] = useState(0);
  const [instanceState, setInstanceState] = useState();

  const array = [];

  const handleInstance = (instance) => {
    setInstanceState(instance);
    instance.options({ speed: 50 });
    return instance;
  };

  useEffect(() => {
    if (instanceState) {
      instanceState.reset();
      messages.map((item, index) => {
        instanceState.type(item);
        if (index + 1 !== messages.length) instanceState.break();
      });
      instanceState.flush();
      instanceState.reset().go();
    }
  }, [messages]);

  return (
    <TypeIt
      options={{ strings: messages, cursor: false, speed: 20 }}
      getBeforeInit={(instance) => handleInstance(instance)}
    ></TypeIt>
  );
}
