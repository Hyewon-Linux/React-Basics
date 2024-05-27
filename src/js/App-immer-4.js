import React from "react";
import { useImmer } from "use-immer";

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

  const [house, setHouse] = useImmer(state);
  const twoTimes = () => {
    setHouse((draft) => {
      draft.whatHave.home.price *= 2;
    });
  };
  const handleKeyPress = (e) => {
    setHouse((draft) => {
      draft.name = e.target.value;
    });
  };

  return (
    <div>
      <h2>{house.whatHave.home.price}</h2>
      <button onClick={twoTimes}> prices 2 times</button>

      {<h2>{house.name}</h2>}
      <input
        type="text"
        defaultValue={house.name}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default App;
