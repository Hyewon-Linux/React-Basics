import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.data;
    case "DECREMENT":
      return state - action.data;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 5);

  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", data: 2 })}>
        {" "}
        +1{" "}
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", data: 3 })}>
        {" "}
        -1{" "}
      </button>
    </>
  );
}

export default App;
