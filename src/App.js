import React, { useState } from 'react'
import { useDispatch  } from 'react-redux'
import  { addTodo } from './storeToolkit/TodoSlice/TodoSlice'
import TodoList from './TodoToolkit/TodoList'

export default function App() {
    const [task,setTask]=useState('')
    const dispatch=useDispatch()
  return (
    <div>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo({task}))}>add</button>
        <TodoList/>
    </div>
  )
}
