import React, { useState } from "react";
import Scenario from "../components/Scenario";
import ConsoleComponent from "../components/ConsoleComponent";

export default function Interface() {
  return (
    <div className="container">
      <div className="interface">
        <Scenario></Scenario>
        <ConsoleComponent></ConsoleComponent>
      </div>
    </div>
  );
}
