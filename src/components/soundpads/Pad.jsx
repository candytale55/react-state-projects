import { useState } from "react"



    /**
     * Add a toggleAllOff button and function to prove that derived state 
     * is not such a good idea. 
     * The Pad components won't care if the button in SoundPads is pressed. 
     * 
     * 
     * Ref: 
     * https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
     * 
     */



export default function Pad(props) {

    const [on, setOn] = useState(props.isOn)
    
    function togglePad () { setOn(prevOn => !prevOn)}
    
    
    return (
        <button
            onClick={togglePad}
            style={{ backgroundColor: props.padColor }}
            className={ on ? "on" : undefined }
        >
            
        </button>
    )
}