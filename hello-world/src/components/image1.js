const person = {
    name: 'Tanmay',
    lastName: 'Das',
    src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    style: { 
        border: '2px solid #FFD700', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px', 
        height: '200px'
    }
};

function FullName({ name, lastName }) {
    return (
        <>
            <h1>
                {name + ' ' + lastName}
            </h1>
        </>
    );
}

function App(props) {
    return (
        <>
            <FullName name={props.name} lastName={props.lastName} />
            <img {...props} />
        </>
    );
}

function Im(person){
    return (
        <img {...person}/>
    );
}

// Usage
export default function Id() {
    return (
        <div>
            <App {...person} />
            <Im {...person}/>
        </div>
    );
}
