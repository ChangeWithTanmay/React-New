import {recipes} from './data';

export default function ListItemCha(){

    return(
        <>
        <h1>Recipes</h1>
        {recipes.map(name => <div key={name.id}>
            <h2>{name.name}</h2>
            <ul>
                {name.ingredients.map(num =>
                    <li key={num}>{num}</li>
                )}
            </ul>
        </div>) }
        </>
    );
}