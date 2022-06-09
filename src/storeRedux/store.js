import { combineReducers, legacy_createStore as createStore } from "redux";
import todoReducer from "./todo";


const store=createStore(combineReducers({
   todos:todoReducer, 
}),
{
    todos:JSON.parse(localStorage.getItem('todo'))
}
)

export default store;