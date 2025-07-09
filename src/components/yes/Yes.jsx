import React from 'react'
import './assets/styles.css'

/**
 * Challenge: 
 * 1. Create a function called `handleClick` that runs
 *    setIsImportant("Definitely") or Heck Yes
 * 2. Add a click event listener to the button
 *    that runs `handleClick` when the button is clicked.
 */


export default function Yes() {
    let [isImportant, setIsImportant] = React.useState("Yes")
    
    // setIsImportant("Heck Yes!")
    // Setting it like this creates an infinite rendering loop. React limits the re-renders.

    function handleClick() {
        setIsImportant("Heck Yes!")
    }

    console.log(isImportant)
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button
                className="value"
                onClick={handleClick}
            >{isImportant}</button>
        </main>
    )
}