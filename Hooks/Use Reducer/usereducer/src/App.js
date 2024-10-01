import { useReducer, useState } from "react";
import "./App.css";
import Bank from "./Bank";

function App() {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

  function reducer(state, action) {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + state.incrementBy };
      case "Decrement":
        return { ...state, count: state.count - state.incrementBy };
      case "Reset":
        return { ...state, count: 0 };
      case "setIncrementBy":
        return { ...state, incrementBy: action.payload };
      default:
        return state;
    }
  }

  return (
    <div className="App">
      {/* This part is the Example of useState */}
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <br />
      <br/>

      {/* This part is the Example of useReducer */}
      <input
        value={state.incrementBy}
        onChange={(e) => dispatch({ type: "setIncrementBy", payload: Number(e.target.value)})}
      />
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
      <button
        onClick={() => {
          dispatch({ type: "Reset" });
        }}
      >
        Reset
      </button>
      <h3>{state.count}</h3>
      <br/>
      <div>
        {/* This is an realtime use case example */}
        <Bank/>
      </div>
    </div>
  );
}

export default App;
