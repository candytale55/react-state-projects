import { useState } from "react"
import Pad from "./Pad"
import padsData from "./assets/pads"
import "./assets/styles.css"



export default function SoundPads() {
  // Initialize local state with the imported array of pad data
  const [pads, setPads] = useState(padsData)

  // Function to toggle the `on` value for a specific pad by its `id`
  function togglePad(id) {
    setPads(prevPads =>
      // Map over the previous state array to return a new array
      prevPads.map(item => {
        // If the current pad matches the clicked one, toggle its `on` value
        return item.id === id
          ? { ...item, on: !item.on } // return a new object with flipped `on`
          : item // otherwise, return the pad unchanged
      })
    )
  }

  // Generate an array of <Pad /> components based on the current pad state
  const padElements = pads.map(pad => (
    <Pad
      key={pad.id}             // Unique key for each element in the list
      id={pad.id}              // Pad's ID (used to identify it on click)
      padColor={pad.color}     // Pad's background color
      isOn={pad.on}            // Whether the pad is active or not
      togglePad={togglePad}    // Function to toggle pad state when clicked
    />
  ))

  // Render the pad grid inside a <main> container
  return (
    <main>
      <div className="pad-container">
        {padElements}
      </div>
    </main>
  )
}