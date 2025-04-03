import { useState, react } from "react";

export default function State1(){
    const[hide, sethide]=useState(false);

    function showButton(){
        sethide(!hide);
    }

    const [count, setCount]=useState(0);

    function countButton(){
        setCount(count+1);
    }

    const Style={
        // height:"40px",
        width: "100px",
        backgroundColor: "blue",
        color: "white",
        padding: '10px', 
        border: '2px solid black',
        borderRadius: '15px',
        textAlign: 'center',
        cursor: "pointer", 
        transition: "background-color 0.3s ease, transform 0.3s ease"
       

    }

    return (
        <>
        <h1>New Button {count}</h1>
        <button onClick={countButton}>count</button>
        <button onClick={showButton}>Click Me</button>
        

        <div style={Style} onClick={countButton}>Count</div>
        
        { hide && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vitae, eaque consectetur soluta deleniti magni sint quo impedit praesentium sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vitae, eaque consectetur soluta deleniti magni sint quo impedit praesentium sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vitae, eaque consectetur soluta deleniti magni sint quo impedit praesentium sunt.</p>}


        </>
    );
}