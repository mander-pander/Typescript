import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Task } from './components/task.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTasks => [
      ...prevTasks,
      { id: Math.random().toString(), text: text }
    ]);
  };

  const taskDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTask={todoAddHandler}/>
      <TodoList items={todos} onDeleteTask={taskDeleteHandler}/>
    </div>
  );
}

export default App;
