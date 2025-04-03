import { useState } from "react";

export default function AliceBob(){
    const [to, setTo]=useState('Alice');
    const [message, setMessage]=useState('Hello');


    function handelSumbit(e){
        e.preventDefault();
        setTimeout(()=>{
            alert(`You Said |  ${message} to ${to}`);
        },3000);
    }

    return(
        <form onSubmit={handelSumbit}>
            <label>
                To:
                <select 
                value={to}
                onChange={e => setTo(e.target.value)}>
                    <option>Alice</option>
                    <option>Bob</option>
                </select>
            </label>
            <textarea 
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">submit</button>

        </form>
    );
}