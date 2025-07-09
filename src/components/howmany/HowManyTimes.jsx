import './assets/styles.css'
import { useState } from 'react'

/**
 * Challenge: 
 * Create a function called `add` that runs
 * when the + button is clicked. (Can just console.log("add") for now)
 */

export default function HowManyTimes() {

  function add() {
    console.log("add");
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