import React, { useRef } from 'react';
import './NewTodo.css';

type NewTaskProps = {
    onAddTask: (todoText: string) => void;
}

const NewTodo: React.FC<NewTaskProps> = (props) => {
    const taskInput = useRef<HTMLInputElement>(null);

    const taskSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredTask = taskInput.current!.value;
        props.onAddTask(enteredTask);
    }

    return <form onSubmit={taskSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Item</label>
            <input type="text" id="todo-text" ref={taskInput}/>
        </div>
        <button type="submit">Add task</button>
    </form>
}

export default NewTodo;
