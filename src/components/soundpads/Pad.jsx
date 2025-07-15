

export default function Pad(props) {
    // console.log(props)

    

    
    
    return (
        <button
            style={{ backgroundColor: props.padColor }}
            className={props.on ? "on" : undefined}
            onClick={()=>props.togglePad(props.id)}
        >
            
        </button>
    )
}