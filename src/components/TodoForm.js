import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

  return (
    <>
        <form className="todoFrom" onSubmit={handleSubmit}>
            <input type="text" className='todo_input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className="todo_btn">Add Task</button>
        </form>
    </>
  )
}

export default TodoForm