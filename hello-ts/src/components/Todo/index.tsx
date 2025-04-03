import React from "react";
import TodoItem from './TodoItem'
import './style.css';


interface ITodoItem {
    id: number;
    title: string;
}

interface TodoProps {
     items: ITodoItem[];
}


const Todo: React.FC<TodoProps> = (props)=> {
    return (
        <div className="todo-container">
            <ol>
                {
                    props.items.map((item) => (
                        <TodoItem key={item.id} title ={item.title} />
                    ))  // Here we are using the destructuring property to get id and title from the item object.
                }
            </ol>
        </div>
    )
};


export default Todo;