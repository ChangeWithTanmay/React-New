import { sculptureList } from "./StateData";
import { useState } from "react";


export default function StateApp(){
    
    const [index, setIndex] = useState(0);
    const [showMore, setMore] = useState(false);

    function handelClick(){
            setIndex(index+1);
    }

    function handelMore(){
        setMore(!showMore);
    }

    let List=sculptureList[index];
    return (
        <>
        <button onClick={handelClick}>Next</button>
        <h2><i>{List.name}</i> by {List.artist}</h2>
        
        <button onClick={handelMore}> {showMore? 'Show':'Hide'} Details</button>

        <h4>({index+1} of {sculptureList.length})</h4>
        
        <img src={List.url} alt={List.alt}/>
        {showMore &&  <p>{List.description}</p>}

       
        
        </>
    );
}