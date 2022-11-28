import React, { useEffect, useState } from "react";
import "./TenziesStyle.css";
import Die from "./Die";
import { nanoid } from "nanoid";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const App = () => {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  // console.log(dice);

  // dice陣列有變化 + 按了roll btn
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    //every: 陣列裡面的所有東西都符合條件才會回傳 true
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("won");
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(
        generateNewDie()
        // value: Math.ceil(Math.random() * 6),
        // isHeld: false,
        // id: nanoid(),
        // -->獨立成為function，重複使用
      );
      // Math.ceil()：
      // 無條件進位，回傳小於等於所給數字的最大整數
    }
    console.log(newDice);
    return newDice;
  }
  // console.log(allNewDice());

  //因為newDice從array改成object，value要取die.value而不是die
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => {
        holdDice(die.id);
      }}
    />
  ));

  function rollDice() {
    if (!tenzies) {
      // setDice(allNewDice());
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      // 1. 用map取得舊資料
      // 2. 如果isHeld是true，維持原樣
      // 3. 不然就產生新的die數字
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    // console.log(id);
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <>
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
};

export default App;

// function allNewDice() {
//   let array = [];
//   for (let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * 6);
//     array.push(randomNum);
//   }
//   console.log(array);
// }
