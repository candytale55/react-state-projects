import { useState } from "react"
import Pad from "./Pad"
import pads from "./assets/pads"
import "./assets/styles.css"



export default function SoundPads() {
  const [padData, setPadData] = useState(pads) // Step 1: Initialize state with the pads array

  function togglePad() { console.log("clicked") }

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   * 
   * Pass that function down to each of the Pad components
   * and set it up so when they get clicked, the function runs
  
     * Ref: 
     * https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
     * https://scrimba.com/learn-react-c0e/~03bb
     * https://youtu.be/x4rFhThSX04?si=XJXCieNNE1oDYwCJ&t=31948
     * 
     */



  const padElements = padData.map(pad => 
    <Pad 
      handleClick={togglePad}
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