import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

uuidv4();



const TodoWrapper = () => {

    const getItems = () => {
        const list = localStorage.getItem('todos');
        if(list) {
            return JSON.parse(list); 
        } else {
            return [];
        }
    }
  
    const [todos, setTodos] = useState(getItems());

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEdited: false}]);
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = id => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isEdited: !todo.isEdited} : todo))
    }


    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEdited: !todo.isEdited} : todo))
    }


    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
      
    }, [todos])
    
    
    return (
    <>
      <div className="todoWrapper">
        <h1 className="title">Get things done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
            return(
            <>
                {todo.isEdited ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )}
            </>
            )
        })}
      </div>
    </>
  );
};

export default TodoWrapper;
