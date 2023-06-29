import React from 'react';

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

   
  return (

    
    <>
        <div className="todo">
            <div onClick={() => toggleComplete(task.id)} className={`todo_name ${task.completed ? 'completed' : ''}`}>{task.task}</div>
            <div className='todo_icons'>
            <i className="fa-solid fa-pen-to-square" onClick={() => editTodo(task.id)}></i>
            <i className="fa-solid fa-trash" onClick={() => deleteTodo(task.id)} ></i>
            </div>
        </div>
    </>
  )
}

export default Todo