import React from "react"
import TodoItem from "./TodoItem"
import {useSelector} from 'react-redux'
import Input from "./Input";

export default function Homepage() {
    const todos = useSelector((state)=> state.todos);
  return (
    <div>
        <Input />
        <ul>
        {todos.map((todo)=>(
            <TodoItem title={todo.title} id={todo.id} key={todo.id}/>
        ))}
        </ul>
    </div>
  )
}
