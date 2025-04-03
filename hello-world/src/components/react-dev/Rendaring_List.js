const peaple=[
    'Tanmay Das',
    'Tamal Mukharji',
    'Pijus Mondol',
    'Goutam Mondal',
    'Soumendu Jana',
    'Barnali Das',
    'Shyashri Bera'
];

export default function List(){
    const Item= peaple.map(person=><li>{person}</li>);
    return <ul>{Item}</ul>
}