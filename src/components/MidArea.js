import React from "react";
import { useState } from "react";
import { useContext} from "react";
import {positionContext} from '../context/Position';

export default function MidArea() {
  const counterState=useContext(positionContext);
  const [droppedItems, setDroppedItems] = useState([]);
  const [droppedActions, setDroppedActions] = useState([]);

  const onclick=[
    {
      id:"When clicked"
    },
    {
      id:"When this sprite clicked"
    },
    {
    id:"Move x 10 steps",
    action:()=>counterState.setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + 10 }))
    },
    {
      id:"Move y 10 steps",
      action:()=>counterState.setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + 10 }))
    },
    {
      id:"Turn - 15 degrees",
      action:()=>counterState.setRotation((prevRotation) => prevRotation - 15 )
    },
    {
      id:"Turn + 15 degrees",
      action:()=>counterState.setRotation((prevRotation) => prevRotation + 15 )
    },
    {
      id:"Change size by 10",
      action:()=>counterState.setSize(prevSize => ({ ...prevSize, width: prevSize.width + 10, height : prevSize.height + 10 })),
    },
    {
      id:"set size to 100 %",
      action:()=>counterState.setSize({width:95.17898101806641, height:100.04156036376953})
    },
    {
      id:"show",
      action:()=>counterState.setVisibility('visible')
    },
    {
      id:"hide",
      action:()=>counterState.setVisibility('hidden')
    }
  ];
  
  const handleDrop = (e) => {
    e.preventDefault();
    const className = e.dataTransfer.getData("class");
    const divHTML = e.dataTransfer.getData("html");
    const itemId = e.dataTransfer.getData("itemId");
    const actionItem = onclick.find(item => item.id === itemId );
    if (actionItem.action) {
      setDroppedActions(prevActions => [...prevActions, actionItem.action]);
    }

    setDroppedItems([...droppedItems, {
      className: className,
      html: divHTML,
      action: actionItem.action
    }]);
  };

  const executeActions = () => {
    droppedActions.forEach(action => action());
  };
    
  const handleReset = () => {
    setDroppedItems([]);
    setDroppedActions([]);
    counterState.setSize({width:95.17898101806641, height:100.04156036376953});
    counterState.setPosition({x:0,y:0});
    counterState.setVisibility('visible');
    counterState.setRotation(0);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  return <div className="flex-1 h-full overflow-auto" onDrop={(e) => handleDrop(e)}
  onDragOver={(e) => handleDragOver(e)}>
    <h1 className="font-medium text-black mx-5 my-5"> {"Mid Area"} </h1>
    {droppedItems.map((item, index) => (
        <div
          key={index}
          className={item.className} 
          onClick={item.action}
          dangerouslySetInnerHTML={{ __html: item.html }}
          draggable="true"
        />
      ))}
      <div className="block">
      <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-8 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-5 my-5" onClick={executeActions}>Replay</button>
      <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-8 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-5 my-5" onClick={handleReset}>Reset</button>
      </div> 
  </div>;
}
