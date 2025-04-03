function Item1({list, condition}){

  
  return(
        <li>
            {/* {condition ? (<del>{list + ' ✅'}</del>) : (list)} */}
            {condition ? (<del>{list + ' ✅'} </del>) : (list)}
        </li>
    );

}

function Item({condition,list}){
  return(
    <li>
      {list} {condition && '.......✅'}
    </li>
  );
}



export default function PackingList() {
  return (
    <>
      <h1>Heading 123 head.</h1>
      <ul>
        <Item list="An image is a visual representation. An image can be two-dimensional" condition={false} />
        <Item list="An image is a visual representation. An image can be two-dimensional" condition={true} /> 
        <Item list="An image is a visual representation. An image can be two-dimensional" condition={false} />
        <Item list="An image is a visual representation. An image can be two-dimensional" condition={true} /> 
      </ul>
    </>
  );
}


