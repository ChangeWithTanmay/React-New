/*
import './AppList.css';

const imageProps={
    src:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    alt:"a Image",
    width:"200px",
    hight: "300px",
    border: "2px solid red",
  borderradius: "25px",
}

function Heading({altvalue}){
    return(
        <div>
            <h1>Hi, Author</h1>
            <p>I am {altvalue}</p>
        </div>
    );
}

function ProfileCard(){
    return ( 
    <div> 
        <Heading altText={imageProps.alt} />
         <img {...imageProps} /> 
    </div>
    );  
};

export default ProfileCard;

*/

import React from 'react';
import Id from './image'

const imageProps = {
  src: 'https://example.com/image.jpg',
  alt: 'A description of the image',
  width: '300',
  height: '200'
};

const Heading = ({ altText }) => {
  return <h1>Image Alt is: {altText}</h1>;
};

const ImageComponent = () => {
  return (
    <div>
      <Heading altText={imageProps.alt} />
      <img {...imageProps} />
      
    </div>
  );
};

export default ImageComponent;
