import React, { useState } from 'react';

const TodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }

  return (
    <>
        <form className="todoFrom" onSubmit={handleSubmit}>
            <input type="text" className='todo_input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className="todo_btn">Update Task</button>
        </form>
    </>
  )
}

export default TodoForm