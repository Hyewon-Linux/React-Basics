import React, { useState } from "react";

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
  const [house, setHouse] = useState(state);
  const abc = () => {
    const newHouse = {
      ...house,
      whatHave: {
        ...house.whatHave,
        home: { ...house.whatHave.home, price: house.whatHave.home.price * 2 },
      },
    };
    setHouse({ ...newHouse });
  };

  return (
    <div>
      <h2>{house.whatHave.home.price}</h2>
      <button onClick={abc}>click me</button>
    </div>
  );
}

export default App;
