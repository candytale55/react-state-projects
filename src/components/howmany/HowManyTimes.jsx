import './assets/styles.css'
import { useState } from 'react'

// Challenge: update `substract` to use a callback function

export default function HowManyTimes() {
  
  function add() {
    console.log("add")
    setCount( prevCount => prevCount + 1)
  }



  function subtract() {
    console.log("subtract")
    setCount(prevCount => prevCount - 1)
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