import React from "react";

export default function Intro({ category }) {
  console.log(category);
  return (
    <div>
      {!category && (
        <div>
          <h1>
            Sergio <br /> "Cheko"
            <br /> García
          </h1>
          <h2>FullStack Developer</h2>
        </div>
      )}
    </div>
  );
}
