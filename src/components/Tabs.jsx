import React, { useEffect, useState } from "react";

export default function Tabs({ children, tabs }) {
  const [visible, setVisible] = useState(`tab-0`);
  const handleTabClick = (tab) => {
    console.log(tab);
    setVisible(`tab-${tab}`);
  };
  useEffect(() => {
    console.log(visible);
  }, [visible]);

  return (
    <div className="tabsWrapper">
      <div className="tabs">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`tab ${visible === `tab-${index}` && "active"}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          );
        })}
      </div>

      {children.map(
        (child, index) =>
          // Aquí debes devolver el contenido de la pestaña si es visible
          visible === `tab-${index}` && (
            <div key={index} className="tabContent">
              {child}
            </div>
          )
      )}
    </div>
  );
}
