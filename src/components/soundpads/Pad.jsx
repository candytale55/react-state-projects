export default function Pad(props) {
    return (
        <button
            // Set the background color based on the `padColor` prop
            style={{ backgroundColor: props.padColor }}

            // Apply the "on" class only if the pad is currently active (`isOn` is true)
            className={props.isOn ? "on" : undefined}

            // When the button is clicked, call the `togglePad` function passed from parent,
            // and pass it this pad's unique `id`
            onClick={() => props.togglePad(props.id)}
        >
        </button>
    )
}