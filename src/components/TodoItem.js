import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";

export default function TodoItem({title, id}) {
  const dispatch = useDispatch();


  const Remove = () =>{
      dispatch(
            deleteTodo({
              id
            })
      )
  }
  return (
        <li className='todo__item'>
            {title}
            <button onClick={Remove}>
              Remove
            </button>
        </li>
  )
}
