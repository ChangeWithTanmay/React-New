function Message(props){
    return(
        <button onClick={()=> alert(`${props.mess}`)}>{props.children}</button>
    );
}

export default function AleartMess(){
    return (
        <>
        <br/>
       <Message mess={"Sona Please Come Here"}>Movie On</Message>
       
       <Message mess={"Sona Please open your dress"}>Light Off</Message>
        
       
        </>
    );
} 