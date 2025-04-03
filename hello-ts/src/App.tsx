import React from "react";
import Todo from "./components/Todo";
import { title } from "process";

const myTodoItems=[
    {
        id:1,
        title: "I need to finish my hw"
    },
    {
        id:2,
        title: "I need to finish my project"
    },
    {
        id:3,
        title: "I need to buy groceries"
    },

    {
        id:4,
        title: "Hi I am Tanmay"
    },

    {
        id:5,
        title: "Hi I am Tanmay"
    }
]


const App: React.FC =() =>{
    return (
        <div >
            <Todo items={myTodoItems}/>
        </div>
    );
};

export default App;