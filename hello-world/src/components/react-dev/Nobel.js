const name={
    FullName: 'Maria Skłodowska-Curie',
            LastName: 'Das',
            src: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
            style:{
                hight: '100px',
                width: '100px',
                border: '5px solid #FFD700',
                borderRadius: '200px'
            },
            Profession:"I am Devloper.",
            Award: 6,
            Award_Detils: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, blackhole ,Matteucci Medal",
            Discovered: "polonium (chemical element)",
}

function Nobel(props){
    let name=props.name.FullName;
    let src=props.name.src;
    let style=props.name.style;
    let profession=props.name.Profession;
    let award=props.name.Award;
    let award_Detils=props.name.Award_Detils;
    let discovered=props.name.Discovered;
    return(
        <>
        <h2>{name}</h2>
       <img src={src} alt={name} style={style}/>
       
       <ul>
        <li><b>Profession:</b> {profession}</li>
        <li><b>Award: {award}</b> ({award_Detils})</li>
        <li><b>Discovered:</b> {discovered}</li>
       </ul>
       
        </>
    );
}

export default function TotalAutor(){
    return(
        <>
        <h1>Nobel Sciencetist</h1>
        <Nobel 
        name={{
            FullName: 'Maria Skłodowska-Curie',
            LastName: 'Das',
            src: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
            style:{
                hight: '100px',
                width: '100px',
                border: '5px solid #FFD700',
                borderRadius: '200px'
            },
            Profession:"I am Devloper.",
            Award: 4,
            Award_Detils: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
            Discovered: "polonium (chemical element)",
        }}
            />

            

<Nobel 
        name={{
            FullName: 'Maria Skłodowska-Curie',
            LastName: 'Das',
            src: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
            style:{
                hight: '100px',
                width: '100px',
                border: '5px solid #FFD700',
                borderRadius: '200px'
            },
            Profession:"I am Devloper.",
            Award: 6,
            Award_Detils: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, blackhole ,Matteucci Medal",
            Discovered: "polonium (chemical element)",
        }}
            />
       

        </>
    );
}