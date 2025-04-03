function Recipe(props){
    return(
        <ol>
            <li>Boil {props.drinkers} cup of water.</li>
            <li>Add {props.drinkers} spoons of tea and 1 spoons of spice.</li>
            <li>Add {0.5*props.drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}


export default function Chai(){
    return(<>
        <h1>Spiced Chai Recipe</h1>
        <h3>For two</h3>
        <Recipe drinkers={2}/>
        <h3>For a gathering</h3>
        <Recipe drinkers={4}/>
    </>);
}