import React, { useEffect, useState } from 'react'
import './style.css'

const Todo = () => {

    const todoList = () => {
        let lists = localStorage.getItem('todoList');
        return JSON.parse(lists);
    }
 

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(todoList);
    const [toggle, setToggle] = useState(false);
    const [isEditItem, setIsEditItem] = useState();
    

    const addTodo = () => {
        if(!inputData) {
            alert("Fill up the input field first");
        }else if(inputData && toggle) {

            setItems(
                items.map((elem) => {
                    if(elem.id === isEditItem) {
                        return {...elem, name: inputData}
                    }else {
                        return elem;
                    }
                })
            )

            
            setInputData("");
            setIsEditItem(null);
            setToggle(false);
            

        } else {

            const newInputData = {
                id: new Date().getTime(),
                name: inputData
            }


            setItems([...items, newInputData]);
            setInputData('');
        }
    }

   
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(items));
    }, [items]);
    


    const filterItem = (id) => {
        const updatedList = items.filter((elem) => {
            return elem.id != id;
        });

        setItems(updatedList);
        
        
    }



    const editItem = (id) => {
        const find_edit = items.find((elem) => {
            return elem.id === id;
        });

        setInputData(find_edit.name);
        setToggle(true);
        setIsEditItem(id);
    }



  return (

    <>
        <div className="container">
            <div className="searchDiv">
            <h1>Add Your Todos 🤞</h1>
            <div className="input">
                <input type="text" className="searchInput" placeholder="Add Items..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
                {
                    toggle ? (<i className="fa-solid fa-pen-to-square green-btn" onClick={addTodo}></i>) : (<i className="fa-solid fa-plus" onClick={addTodo}></i>)
                }
                
            </div>
            </div>

            <div className="items">

                {
                    items.map((elem) => {
                        return (
                        <div className="item" key={elem.id}>
                            <p>{elem.name}</p>
                            <div className="icons">
                                <i className="fa-solid fa-pen-to-square" onClick={() => editItem(elem.id)}></i>
                                <i className="fa-solid fa-trash" onClick={() => filterItem(elem.id)}></i>
                            </div>
                        </div>
                        )
                          
                    })
                }

                        
 

                
            </div>


        </div>
    </>
  )
}

export default Todo