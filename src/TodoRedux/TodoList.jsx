import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteCreator, checkedCreator, editCreator } from "../store/todo";


export default function TodoList() {
const [newTask,setNewTask]=useState('')
const todoList=useSelector(store=>store.todos);
const dispatch=useDispatch()
useEffect(()=>{
    if(!localStorage.hasOwnProperty('todo')){
        localStorage.setItem('todo',JSON.stringify([]))
    }
},[])
useEffect(()=>{
    if(localStorage.hasOwnProperty('todo')){
        localStorage.setItem('todo',JSON.stringify(todoList))
    } 
},[todoList])
  return (
    <div>
        {
        todoList.map(i=>(
            <div key={i.id} style={{display:'flex',alignItems:'center'}}>
                <input type='checkbox' checked={i.checked} onChange={()=>dispatch(checkedCreator(i.id))}/>
                <input type='text' defaultValue={i.task} readOnly={i.readOnly} onChange={e=>setNewTask(e.target.value)}/>
                <button onClick={()=>dispatch(editCreator(i.id,newTask))}>edit</button>
                <button onClick={()=>dispatch(deleteCreator(i.id))}>x</button>
            </div>
        ))
        }
    </div>
  )
}
