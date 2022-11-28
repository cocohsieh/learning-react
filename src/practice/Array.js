import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  // const [thingsArray, se] = ["Thing 1", "Thing 2"]
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

  function addItem() {
    // setThingsArray((prevState) => prevState.push());
    //直接用push會改到原本的state，不推薦
    //.push()出來的結果會是陣列的長度 -> 3

    setThingsArray((prevState) => {
      return [...prevState, `Thing ${prevState.length + 1}`];
    });

    // ...spread operator can concatenate arrays or objects

    // We'll work on this next
    // const newThingText = `Thing ${thingsArray.length + 1}`
    // thingsArray.push(newThingText)
    // document.getElementById()
    // console.log(thingsArray)
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
