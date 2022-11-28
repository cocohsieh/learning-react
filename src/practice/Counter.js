import React, { useState } from "react";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);
  function add() {
    // 最簡單寫法
    // setValue(value + 1);

    // 更好的寫法
    // setCount(function(oldValue){
    //     return oldValue  + 1
    // })

    // 在進化
    // setCount((oldValue) => oldValue + 1);

    // 常用用法
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    // setCount(count - 1);

    // setCount(function(oldValue){
    //     return oldValue - 1
    // })

    // setCount(oldValue=>oldValue - 1)

    setCount((prevCount) => prevCount - 1);
  }
  return (
    <>
      {/* <div>Counter</div>
      <h1>{count}</h1> */}
      
      <Count number={count}/> {/* 原本的count值，傳到count元件 */}
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </>
  );
};

export default Counter;

// ★★★筆記★★★
// if u ever need the old value of state
// to help u determine the new value of state,
// u should pass a callback function to ur
// state setter function instead of using state directly.
// this callback function will receive the old value of this state
// as its parameter, which u can then use to determine
// ur new value of state.
