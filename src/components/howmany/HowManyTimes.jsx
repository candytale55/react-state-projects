import './assets/styles.css'
import { useState } from 'react'

/**
 * Challenge: 
 * See if you can think of a way to add 1 to the count
 * every time the + button is clicked
 */

export default function HowManyTimes() {

  function add() {
    console.log("add");
    setCount( count + 1 )  // Don't use ever count++ or ++count because these modify the value directly - Big NONO in React
  }

  let [count, setCount] = useState(0);
    return (
      <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button className="minus" aria-label="Decrease count">–</button>
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