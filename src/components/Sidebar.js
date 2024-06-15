import React from "react";
import Icon from "./Icon";
import { useContext } from "react";
import {positionContext} from '../context/Position';

export default function Sidebar() {
  const counterState=useContext(positionContext);

  const handleDragStart = (e, itemId) => {
    e.dataTransfer.setData("itemId", itemId);
    const className = e.target.className;
    e.dataTransfer.setData("class", className);
    const draggedElement = e.currentTarget;
  const divHTML = draggedElement.innerHTML;
  e.dataTransfer.setData("html", divHTML);
  };
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
        onDragStart={(e) => handleDragStart(e, "When clicked")}>
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
        onDragStart={(e) => handleDragStart(e, "When this sprite clicked")}>
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
        onDragStart={(e) => handleDragStart(e, "Move x 10 steps",)} onClick={()=>counterState.setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + 10 }))}>
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
        onDragStart={(e) => handleDragStart(e, "Move y 10 steps")} onClick={()=>counterState.setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + 10 }))}>
        {"Change Y by 10"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
        onDragStart={(e) => handleDragStart(e, "Turn - 15 degrees")} onClick={()=>counterState.setRotation((prevRotation) => prevRotation - 15 )}>
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
        onDragStart={(e) => handleDragStart(e, "Turn + 15 degrees")} onClick={()=>counterState.setRotation((prevRotation) => prevRotation + 15 )}>
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
    onDragStart={(e) => handleDragStart(e, "Change size by 10")} onClick={()=>counterState.setSize(prevSize => ({ ...prevSize, width: prevSize.width + 10, height : prevSize.height + 10 }))}>
        {"Change size by 10"}
    </div>
    <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
    onDragStart={(e) => handleDragStart(e, "set size to 100 %")} onClick={()=>counterState.setSize({width:95.17898101806641, height:100.04156036376953})}>
        {"set size to 100 %"}
    </div>
    <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
    onDragStart={(e) => handleDragStart(e, "show")} onClick={()=>counterState.setVisibility('visible')}>
        show
    </div>
    <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer draggable" draggable="true"
    onDragStart={(e) => handleDragStart(e, "hide")} onClick={()=>counterState.setVisibility('hidden')}>
        hide
    </div>
    </div>
  );
}
