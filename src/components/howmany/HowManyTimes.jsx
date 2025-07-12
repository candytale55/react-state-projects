import './assets/styles.css'
import { useState } from 'react'
import Count from './Count'

/**
 * Challenge:
 * - Create a new component called `Count`
 *    - It should receive a prop called `number`, whose value
 *      is the current value of our count
 *    - Have the component render the h2.count element below
 *      and display the incoming prop `number`
 * - Replace the h2.count below with an instance of
 *   the new Count component, passing the correct value
 *   to its `number` prop.
 * - After doing this, everything should be working the
 *   same as before.
 */


export default function HowManyTimes() {


  function add() {
    console.log("add")
    setCount(prevCount => prevCount + 1)
  }


  function subtract() {
    console.log("subtract")
    setCount(prevCount => prevCount - 1)
  }


  let [count, setCount] = useState(0);
    return (
      <main className="container">
        
        <div className="counter">
          <button
            className="minus"
            aria-label="Decrease count"
            onClick={subtract}
          >–</button>

          <Count number={count} />
          
          <button
            className="plus"
            aria-label="Increase count"
            onClick={add}
          >+</button>
        </div>
      </main>
    )
}