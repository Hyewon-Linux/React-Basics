import React from "react";
import { useReducer } from "react";
import { Button } from "@mui/material";

function reducer(state, action) {
  switch (action.type) {
    case `INCREMENT`:
      return { value: state.value + 1 };
    case `DECREMENT`:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 10 });

  return (
    <>
      <h3 style={{ backgroundColor: `aqua` }}>
        Current Counter Value is <b style={{ color: "blue" }}>{state.value}</b>
      </h3>
      <Button
        variant="contained"
        and
        color="info"
        onClick={() => {
          dispatch({ type: `INCREMENT` });
        }}
      >
        +1
      </Button>
      <Button
        variant="contained"
        and
        color="secondary"
        onClick={() => dispatch({ type: `DECREMENT` })}
      >
        -1
      </Button>
    </>
  );
};
function App() {
  return <Counter />;
}

export default App;
