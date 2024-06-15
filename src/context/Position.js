import React from "react";
import { createContext ,useState} from "react";

export const positionContext=createContext(null);

export const CounterProvider =(props)=>{
    const [position,setPosition]=useState({
        x:0,
        y:0
    });
    const [rotation ,setRotation]=useState(0);
    const [visibility,setVisibility]=useState('visible');
    const [size,setSize]=useState({
        width:95.17898101806641,
      height:100.04156036376953
    });
    return(
        <positionContext.Provider value={{position ,setPosition ,rotation,setRotation,visibility,setVisibility,size,setSize}}>
            {props.children}
        </positionContext.Provider>
    )
}