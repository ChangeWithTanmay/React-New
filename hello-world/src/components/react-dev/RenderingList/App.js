import { people } from "./data";


export default function ListItem(){
    const chemist=people.filter(
        person=> person.profession==='chemist'
        // To filter Profassion value..
    );

    const style={
        width: "100px",
        height:"100px",
        border: "5px solid black",
        borderRadius: "200%"
    }
    // Than Print value of component...

    const listItem = people.map(
        person=> <li>
            <img src={person.imageId} alt={person.name} style={style} />
            <p><b>{person.name} :</b> {person.profession} known for {person.accomplishment}.</p>
        </li>
    )

    return <ul>{listItem}</ul>


}

