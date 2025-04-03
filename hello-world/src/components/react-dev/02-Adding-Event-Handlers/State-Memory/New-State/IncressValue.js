import { useState,react } from "react";

export default function Counter(){

    const [number, setNum]=useState(0)
    
    function countNumber(){
        
        setNum(number+3);
        setTimeout(()=>{
            alert(`${number}`);
        },1000)
        
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={countNumber}>+3</button>
        </>
    );
}