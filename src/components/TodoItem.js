import React from 'react'

export default function TodoItem(props) {
  return (
        <li className='todo__item'>
            {props.title}
            {props.id}
            <input type="checkbox" name="" id="" />
        </li>
  )
}
