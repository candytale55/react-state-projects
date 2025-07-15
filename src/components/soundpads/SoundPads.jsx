import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"

/**
 * Challenge:
 * Call setPads to update the state of the one pad that was
 * clicked. Map over the previous pads array, and if the current
 * item you're iterating over has the same id as the `id` passed
 * to this function, then return a new object with the `on` value
 * set to the opposite of what it was before.
 * Otherwise (if the ids don't match), just return the previous
 * item as it was, unchanged. 
   * Ref: https://scrimba.com/learn-react-c0e/~06ud
   * https://youtu.be/x4rFhThSX04?si=PPxPYD8gVZBiuYD8&t=32039
   */



export default function SoundPads() {
  const [pads, setPads] = useState(pads) // Step 1: Initialize state with the pads array

  function togglePad(id) {
    console.log(id)
    setPads(prevPad => {
      return prevPad.map((id) => {
        if (prevPad.id === id) {
          return {...prevPad, on: !pad.on}
        } else {
          return prevPad
        }
      })
    })
    console.log(pads.color)
  }


  const padElements = pads.map(pad => 
    <Pad 
      key={pad.id} 
      id= {pad.id} 
      padColor={pad.color}
      isOn={pad.on}
      togglePad={togglePad}

    />

    )


    return (
        <main>
            <div className="pad-container">
              {padElements}                
        </div>
        </main>
    )
}