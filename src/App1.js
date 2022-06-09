import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCreator } from './store/todo';
import TodoList from "./Todo/TodoList";
import './App.css'
function App() {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button
        onClick={() =>{
          dispatch(addCreator(val));
          setVal('')
        }
        }
      >
        Add
      </button>
      <TodoList/>
    </div>
  );
}

export default App;
