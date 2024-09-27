import { act, useReducer, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  }

  return (
    <div className="App">
      {/* This part is the Example of useState */}
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <br />

      {/* This part is the Example of useReducer */}
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Subtract
      </button>
      <h3>{state}</h3>
    </div>
  );
}

export default App;
