import { useState } from "react";
const peaple=[{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }
];

const myArray = ['apple', 'banana', 'orange'];

// const listFood = myArray.map((food)=>{
//     return(
//         <li>{food}</li>
//     );
// })

export default function MyMapList(){
    const[index, setIndex]=useState(0);

    function nowIndex(num){
        
        setIndex(num);
    }

    const Item = peaple.map(person=>{
        return(
            <>
            <h1>{person.name}</h1>
             <button style={{
                backgroundColor:'red',
                height:"40px",
                width:"80px",
                color:'white',
                borderRadius: '20px',
                cursor:'pointer'
                
             }}
             onClick={()=>{
                
                setIndex(person.id)
                alert(`Hii.. ${index}`);
            }}
             >{person.id}</button>
            </>
        );
    });

    const listFood = myArray.map((food)=>{
        return(
            <li>{food}</li>
        );
    })
    return (
       <>
       <div style={{ 
        display: 'flex', 
        gap: '20px', 
        height:'50px',
        // width:'30px',
        flexWrap:'wrap'
        }}> 
        {Item} 
        </div>
       
        <p>{listFood}</p>
        </>
    );
}