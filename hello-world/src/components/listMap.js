const myArr=['Apple','banana','Mango',];

const MyList=myArr.map((item)=>{
    return(
        <p>{item}</p>
    );
})

export default function MapMap(){
    return(
        <>
        <MyList/>
        </>
    );
}