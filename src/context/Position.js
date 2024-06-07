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
    return(
        <positionContext.Provider value={{position ,setPosition ,rotation,setRotation,visibility,setVisibility}}>
            {props.children}
        </positionContext.Provider>
    )
}