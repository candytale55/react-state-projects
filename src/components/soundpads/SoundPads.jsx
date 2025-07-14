import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"

/**
 * Challenge part 2:
 * 1. Create a separate component called "Pad" and
 *    replace the `button` above with our <Pad /> component
 * 2. Pass the Pad component a prop called `color` with the
 *    value of the same name from the `padsData` objects
 * 3. In the Pad component, apply an inline style to the <button>
 *    to set the backgroundColor of the button.
 * 
 * (We'll deal with the "on" property soon)
 */


export default function SoundPads() {
  const [padData, setPadData] = useState(pads) // Step 1: Initialize state with the pads array
  

  const padElements = padData.map(pad => 
    <Pad 
      key={pad.id}
      padColor={pad.on ?pad.color: "white" }    
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