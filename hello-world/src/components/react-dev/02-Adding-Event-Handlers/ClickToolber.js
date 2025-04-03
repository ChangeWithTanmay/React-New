export default function ClickToolBer(){
    const style={
        height:"50px",
        width: "300px",
        backgroundColor: "#ff94cc",
       borderRadius: "10px",
        border: "0.4px solid #565656",
    }
    return (
        <div style={style} onClick={()=>alert(`You are Clicked Div Section.`)}>
            <button onClick={()=>alert(`Playing..`)}>Playing Movie</button>
            <button onClick={()=>alert(`Uploading..`)}>Upload Image</button>
        </div>
    );
}