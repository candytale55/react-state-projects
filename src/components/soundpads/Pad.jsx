import { useState } from "react"


export default function Pad(props) {
    console.log(props.id)
    const [on, setOn] = useState(props.isOn)
    

    
    
    return (
        <button
            style={{ backgroundColor: props.padColor }}
            className={on ? "on" : undefined}
            onClick={()=>props.togglePad()}

        >
            
        </button>
    )
}