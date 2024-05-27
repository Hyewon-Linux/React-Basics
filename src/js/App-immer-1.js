import React from "react";

function App() {
  const state = {
    name: "Lee",
    age: 20,
    address: {
      country: "Korea",
      city: "Seoul",
    },
    whatHave: {
      home: {
        price: 1_000_000,
        address: {
          city: "Seoul",
          detail: "Gangnam 23",
        },
      },
      money: 1_000_000,
    },
  };

  // const newState = { ...state };
  const newState = {
    ...state,
    address: { ...state.address },
    whatHave: { ...state.whatHave, home: { ...state.whatHave.home } },
  };
  console.log(`🚨`, newState === state);
  console.log(`🙋`, newState.address === state.address);
  console.log(`⛔️`, newState.whatHave === state.whatHave);
  console.log(`💕`, newState.whatHave.home === state.whatHave.home);

  return (
    <>
      <b> {state.name} </b>
    </>
  );
}

export default App;
