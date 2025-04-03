

export default function AleartSomHow(){
    return(
        <Fun 
         onPlayMovie={()=> alert(`Playing!`)}
         onUploadImage={()=> alert(`Uploading!`)}
        />
    );
}

function Fun(props){
    return(
        <>
        <br/>
        <Button onclick={props.onPlayMovie}>Play Movie</Button>
        <Button onclick={props.onUploadImage}>Upload Image</Button>
        </>
    );
}

function Button(props){
    return(
        <button onClick={props.onclick}>{props.children}</button>
    );
}