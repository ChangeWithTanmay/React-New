import React, { useState } from 'react';

const ButtonComponent = () => {
  const [activeButton, setActiveButton] = useState(0); 

  const buttons = [
    { id: 0, heading:'Tanmay Das' ,text: 'Button 1', link: 'https://excalidraw.com/', description:'Profession: I am Devloper. Award: 4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal) Discovered: polonium (chemical element)' },
    { id: 1, heading:'Soumendu Jana' ,text: 'Button 2', link: 'https://www.youtube.com/', description:'An image is a visual representation. An image can be two-dimensional An image is a visual representation. An image can be two-dimensional .......✅ An image is a visual representation. An image can be two-dimensional' },
    { id: 2, heading:'Shreyashi Bera' ,text: 'Button 3', link: 'https://www.google.com/', description:'This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission. More information...' },
    { id: 3, heading:'Subhajit That' ,text: 'Button 4', link: 'https://example.com/4', description:'Boil 2 cup of water. Add 2 spoons of tea and 1 Boil 2 cup of water. Add 2 spoons of tea and 1 spoons of spice. Add 1 cups of milk to boil and sugar to taste. spoons of spice. Add 1 cups of milk to boil and sugar to taste.' },
  ];

  const handleClick = (id) => {
    setActiveButton(id);
    
  };

  const openLink =(link)=>{
    window.open(link, '_blank');
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleClick(button.id, button.link)}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: activeButton === button.id ? '#007BFF' : '#ccc',
            color: activeButton === button.id ? 'white' : 'black',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => {
            if (activeButton !== button.id) {
              e.target.style.backgroundColor = '#aaa';
            }
          }}
          onMouseOut={(e) => {
            if (activeButton !== button.id) {
              e.target.style.backgroundColor = '#ccc';
            }
          }}
        >
          {button.text}
        </button>
      ))}

      <h1>{buttons[activeButton].heading}</h1>
      <br/>
      <br/>
      <p>{buttons[activeButton].description}</p>
      <button onClick={() => openLink(buttons[activeButton].link)}>Let's See It</button>
    </div>
  );
};

export default ButtonComponent;