import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"

/**
 * Challenge part 3:
 * Our buttons got turned off by default! Update the code
 * so if the button is "on", it has the className of "on".
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