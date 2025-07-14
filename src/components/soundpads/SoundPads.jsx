import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"



export default function SoundPads() {
  const [padData, setPadData] = useState(pads) // Step 1: Initialize state with the pads array

  function turnAllPadsOff() {
    console.log("Turning off")
    setPads(prevPads => prevPads.map(pad => ({
      ...pad,
      on: false
    })))
  }

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
        <button className="all-off" onClick={turnAllPadsOff}>Turn All Off</button>
        </main>
    )
}