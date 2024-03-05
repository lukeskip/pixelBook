import React, { useState, useEffect } from "react";
import Scenario from "../components/Scenario";
import Console from "../components/Console";

export default function Interface() {
  return (
    <div className="container">
      <div className="interface">
        <Scenario></Scenario>
        <Console></Console>
      </div>
    </div>
  );
}
