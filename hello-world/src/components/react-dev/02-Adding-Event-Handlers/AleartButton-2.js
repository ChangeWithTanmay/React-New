function Message({mess, children}){
    return(
        <button onClick={()=> alert(`${mess}`)}>
            {children}
        </button>
    );
}

export default function AleartClick2(){
    return(
        <>
        <br/>
        <Message mess={`Play "Kiki's Delivery Service"`}>Rom Rom Bhai yo</Message>
        <Message mess={`Upload Image`}>System Ferdenga...</Message>
        </>
    );
}