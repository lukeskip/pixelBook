import React, { useState } from "react";
import Scenario from "../components/Scenario";
import ConsoleComponent from "../components/ConsoleComponent";

export default function Interface() {
  const [dialog, setDialog] = useState("");
  return (
    <div className="container">
      <div className="interface">
        <Scenario dialog={dialog} setDialog={setDialog}></Scenario>
        <ConsoleComponent setDialog={setDialog}></ConsoleComponent>
      </div>
    </div>
  );
}
