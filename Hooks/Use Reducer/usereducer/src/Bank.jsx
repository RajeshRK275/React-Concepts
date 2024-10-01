import { useReducer, useState } from "react";

export default function Bank() {
  const [state, dispatch] = useReducer(reducer, { amount: 0 });
  const [amount, setAmount] = useState(0);

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return { ...state, amount: state.amount + action.payload };
      case "sub":
        return { ...state, amount: state.amount - action.payload };
      default:
        return state;
    }
  }
  return (
    <div>
      <h2>Amount : {state.amount}</h2>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch({ type: "add", payload: Number(amount) })}>
        Deposite
      </button>
      <button onClick={() => dispatch({ type: "sub", payload: Number(amount) })}>
        Withdraw
      </button>
    </div>
  );
}
