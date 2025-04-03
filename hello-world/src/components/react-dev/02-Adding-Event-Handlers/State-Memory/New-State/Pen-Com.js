import { useState } from "react";

export default function PenComplete(){
    const [pen, setPending]=useState(0)
    const [com, setComplet]=useState(0)

function delay(ms) { 
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateFun(){
    setPending(pen+1);
    await delay(2000);
    setPending(pen-1)
    // setPending(pen-1);
    setComplet(com+1);
}

    return(
        <>
        <h2>Pending:{pen}</h2>
        <h2>Completed:{com}</h2>
        <button onClick={updateFun}>Buy</button>
        </>
    );
}