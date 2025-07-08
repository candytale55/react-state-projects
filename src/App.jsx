import { useState } from 'react'
import placeholderPhoto from './assets/images/placeholder-pic.jpg'

function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }

  /**
   * Challenge: add our new function to the button
   */

  return (
    <main className="container">
      <img
        src={placeholderPhoto}
        alt="Placeholder image from Picsum"
      />
      <button>Click me</button> 
    </main>
  )
}

export default App
