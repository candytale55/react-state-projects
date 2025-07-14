import { useState } from "react"



    /**
     * Add a toggleAllOff button and function to prove that derived state 
     * is not such a good idea. 
     * The Pad components won't care if the button in SoundPads is pressed. 
     * 
     * The best choice is to have just one SOT.
     * 
     * Ref: 
     * https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
     * https://scrimba.com/learn-react-c0e/~03bb
     * https://youtu.be/x4rFhThSX04?si=XJXCieNNE1oDYwCJ&t=31948
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