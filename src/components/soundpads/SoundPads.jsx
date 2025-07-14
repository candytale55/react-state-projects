import { useState } from "react"
import pads from "./assets/pads"
import "./assets/styles.css"

export default function SoundPads() {
    const [padData, setPadData] = useState(pads) // Step 1: Initialize state with the pads array

  const padElements = padData.map(pad => 
      <button
        key={pad.id}
        style={{ backgroundColor: pad.on ? pad.color : "white" }}
      ></button>
    )


    return (
        <main>
            <div className="pad-container">

              {padElements}                
            </div>
        </main>
    )
}