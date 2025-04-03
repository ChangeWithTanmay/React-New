function Message(props){
    return(
        <button onClick={()=> alert(`${props.mess}`)}>
            {props.mess}
        </button>
    );
}

export default function AleartClick(){
    return(
        <>
        <br/>
        <Message mess={`Play "Kiki's Delivery Service"`}/>
        <Message mess={`Upload Image`}/>
        </>
    );
}