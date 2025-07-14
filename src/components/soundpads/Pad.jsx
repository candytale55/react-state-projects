import { useState } from "react"



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
 * Ref: https://youtu.be/x4rFhThSX04?si=oQb2AeQEHG2OG-pj&t=31440
 * https://scrimba.com/learn-react-c0e/~04md/s0lmhjavsm/head
 * 
 */



export default function Pad(props) {

    const [on, setOn] = useState(props.isOn)
    
    const toggle = (prevOn => !prevOn)
    
    
    return (
        <button
            onClick={toggle}
            style={{ backgroundColor: props.padColor }}
            className={ on ? "on" : undefined }
        >
            
        </button>
    )
}