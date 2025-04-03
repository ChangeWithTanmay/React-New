import { sculptureList } from "./data";
import { useState, react } from "react";

export default function StateApp(){

    const[value, setValue]=useState(0);
    const [view, setView]=useState(false)

    

    function valueNext(){
        if(hasNext){
            setValue(value+1);
        }
    }

    function valuePrev(){
        if(hasPrev){
            setValue(value-1);
        }
    }

    function DataView(){
        setView(!view);
    }

    let Data = sculptureList[value];
    let hasNext=value<sculptureList.length-1;
    let hasPrev=value>0;

    return (
        <>

        <h1><i>{Data.name}</i> by {Data.artist}</h1>
        <button onClick={valuePrev} disabled={!hasPrev}>Back</button>
        <button onClick={valueNext} disabled={!hasNext}>Next</button>
        <h3>{value} of {sculptureList.length}</h3>


        <button onClick={DataView}>View More</button>
        { view && <p>{Data.description}</p> }
        
        <img src={Data.url} alt={Data.alt}/>

        </>
    );
}