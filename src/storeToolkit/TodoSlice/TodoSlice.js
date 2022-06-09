import { createSlice } from "@reduxjs/toolkit";



const todoSlice=createSlice({
    name:'todos',
    initialState:{
        todos:[],
    },
    reducers:{
        addTodo(state,action){
           state.todos.push({
               id:new Date().toString(),
               task:action.payload.task,
               completed:false,
           })
        },
        checking(state,action){
         const toggleTodo=state.todos.find(i=>i.id===action.payload.id)
         toggleTodo.completed=!toggleTodo.completed
        },
        remove(state,action){
        state.todos=state.todos.filter(i=>i.id!==action.payload.id)
        }
    }
})


export const { addTodo, checking, remove}=todoSlice.actions;

export default todoSlice.reducer;