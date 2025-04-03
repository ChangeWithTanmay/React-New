
import React , { useState } from "react";
export default function State(){
    var x=1;
    const [count, setCounter]=useState(0);
    const [show, setShow]=useState(false);

    function updateState() {
        setCounter(prevCount => prevCount + 1);
    }
    
    function showMe() {
        setShow(prevShow => !prevShow);
    }
    
    
    return(
        <>
        <h1>Button Click {count}  </h1>
        <button onClick={updateState}>Click Me!</button>
        <br/>
        {show && <p>Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity.</p>}
        <button onClick={showMe}> {show? 'Hide':'Show'} Now</button>

        </>
    );
    
    // return (
    //     <>
    //         <h1>Button Click {count}</h1>
    //         <button onClick={updateState}>Click Me!</button>
    //         <br />
    //         {show && <p>Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."</p>}
    //         <button onClick={showMe}>Show Now</button>
    //     </>
    // );
}


/*
import React, { useState } from "react";

export default function State() {
    const [count, setCounter] = useState(0);
    const [show, setShow] = useState(false);

    function updateState() {
        setCounter(prevCount => prevCount + 1);
    }

    function showMe() {
        setShow(prevShow => !prevShow);
    }

    return (
        <>
            <h1>Button Click {count}</h1>
            <button onClick={updateState}>Click Me!</button>
            <br />
            {show && <p>Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."</p>}
            <button onClick={showMe}>Show Now</button>
        </>
    );
}
  */
