import './assets/styles.css'
import { useState } from 'react'

/**
 * Challenge: 
 * 
 */



export default function HowManyTimes() {

  function add_1() {
    console.log("add")
    setCount( count + 1 )  
  }

  /**
   * There is another way to use the setter function using a callback function.
   * The callback function would take the old value of count, and you can use 
   * the temporary version oldValue 
  */

  function add_2() {
    setCount(function (oldValue) {
      console.log("add")
      return oldValue + 1;
    })
  }

  /**
   * Use the common convention of prev (previous value) + state name Count. 
  */

  function add() {
    setCount(function (prevCount) {
      console.log("add")
      return prevCount + 1;
    })
  }


  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */


  function subtract() {
    console.log("subtract")
    setCount( count - 1 )
  }

  let [count, setCount] = useState(0);
    return (
      <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button
            className="minus"
            aria-label="Decrease count"
            onClick={subtract}
          >–</button>
          <h2 className="count">{count}</h2>
          <button
            className="plus"
            aria-label="Increase count"
            onClick={add}
          >+</button>
        </div>
      </main>
    )
}