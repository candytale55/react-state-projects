import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"

/**
 * Challenge: Create a toggle() function that logs
 * "clicked!" to the console
 * 
 * Pass that function down to each of the Pad components
 * and set it up so when they get clicked, the function runs
 
   * Ref: https://scrimba.com/learn-react-c0e/~06ud
   * https://youtu.be/x4rFhThSX04?si=PPxPYD8gVZBiuYD8&t=32039
   */



export default function SoundPads() {
  const [padData, setPadData] = useState(pads) // Step 1: Initialize state with the pads array

  function togglePad(id) {
    // console.log("toggle function")
 
    // map over the pads array, and if the current item has
    // the same id as the one passed to this function, then
    // flip its `on` value.
  }


  const padElements = padData.map(pad => 
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