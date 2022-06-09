import React from 'react';
import { useDispatch } from 'react-redux';
import { checking, remove } from '../storeToolkit/TodoSlice/TodoSlice';



export default function TodoItem({id,task,completed}) {
  const dispatch=useDispatch();
  return (
    <div>
        <input type="checkbox" checked={completed} onChange={()=>dispatch(checking({id}))}/>
        <p>{task}</p>
        <button onClick={()=>dispatch(remove({id}))}>x</button>
    </div>
  )
}
