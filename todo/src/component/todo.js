import React, { useState, useEffect } from 'react';
function ToDo(){
    const [todo,setToDo]=useState(['test']);
    {todo.map((item)=>
        {
         return (<li>{item}</li>)
        })
        } 
}