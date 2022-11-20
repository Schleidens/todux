import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../store/todoSlice';

export default function Input() {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const addTodoToList = (event) =>{
        event.preventDefault();
        if (value){
            dispatch(
                addTodo({
                    title: value
                })
            );
        };
        setValue('')
    };

  return (
    <div className='input__form'>
        <form action="" className='form'>
            <input 
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
             />
            <button onClick={addTodoToList} className="button-56">Add Todo</button>
        </form>
    </div>
  )
}
