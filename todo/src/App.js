import './App.css';
import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [todo, setToDo] = useState([]);
  const inputRef = useRef();

 
  const handleAddToDo = () => {
    const task = inputRef.current.value;
    if (task.trim()) {
      const newItem = { completed: false, task };
      setToDo([...todo, newItem]);
      inputRef.current.value = ""; // Clear the input field
    }
  };

  const handleItemDone = (index) => {
    const newToDo = [...todo];
    newToDo[index].completed = !newToDo[index].completed;
    setToDo(newToDo);
  };

  const handleItemDelete = (index) => {
    const newToDo = [...todo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
  };

  return (
    <div className="App">
      <div className='todo'>
        <h2>TO DO LIST</h2>
        <div className='contain'>
          <ul>
            {todo.map(({ task, completed }, index) => (
              <div key={index} className='item'>
                <li
                  className={completed ? 'done' : ''}
                  onClick={() => handleItemDone(index)}
                >
                  {task}
                </li>
                <span className='d' onClick={() => handleItemDelete(index)}>🗑️</span>
              </div>
            ))}
          </ul>
          <input ref={inputRef} placeholder='Write down your goal for today...' />
          <button className="button-89" role="button" onClick={handleAddToDo}>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default App;
