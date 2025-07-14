import { useState } from "react"


export default function Pad(props) {

    const [on, setOn] = useState(props.isOn)
    

    
    
    return (
        <button
            onClick={props.handleClick}
            style={{ backgroundColor: props.padColor }}
            className={ on ? "on" : undefined }
        >
            
        </button>
    )
}