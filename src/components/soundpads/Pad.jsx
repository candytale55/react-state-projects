export default function Pad(props) {
     
    return (
        <button
            style={{ backgroundColor: props.padColor }}
            className={props.isOn ? "on" : undefined}
            onClick={()=>props.togglePad(props.id)}
        >         
        </button>
    )
}