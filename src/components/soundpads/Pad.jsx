

export default function Pad(props) {
    // console.log(props.padColor)
    return (
        <button
            style={{ backgroundColor: props.padColor }}
            className={ props.isOn ? "on" : ""}
        >
            
        </button>
    )
}