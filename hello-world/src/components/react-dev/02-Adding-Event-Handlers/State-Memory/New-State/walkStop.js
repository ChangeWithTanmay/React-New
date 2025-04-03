import { useState } from "react";

export default function WalkStop(){
    const[walk, setWalk]=useState(true);

    function colorWalk(){
        setWalk(!walk);
    }
    return(
        <>
        <br/><br/>
        <button onClick={colorWalk}>Change to {walk? 'Stop': 'Walk'}</button>
        <h1 style={{
           color: walk? 'darkgreen':'darkred'
        }}>{walk?'Walk':'Stop'}</h1>
        </>
    );
}