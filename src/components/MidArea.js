import React from "react";
import { useState } from "react";

export default function MidArea() {
  
  const [droppedItems, setDroppedItems] = useState([]);
  
  const handleDrop = (e) => {
    e.preventDefault();
    const className = e.dataTransfer.getData("class");
    const divHTML = e.dataTransfer.getData("html");
    const divWithClass = `<div class="${className}">${divHTML}</div>`;

    setDroppedItems([...droppedItems, divWithClass]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  return <div className="flex-1 h-full overflow-auto" onDrop={(e) => handleDrop(e)}
  onDragOver={(e) => handleDragOver(e)}>
    {"mid area"} 
    {droppedItems.map((item, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: item }}
          draggable="true"
        />
      ))}
  </div>;
}
