import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"

/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 * 
 * Ref: https://scrimba.com/learn-react-c0e/~04md/s0lmhjavsm/head 
 * 
 */

export default function SoundPads() {
  const [padData, setPadData] = useState(pads) // Step 1: Initialize state with the pads array
  

  const padElements = padData.map(pad => 
    <Pad 
      key={pad.id}
      padColor={pad.color}
      isOn={pad.on}
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