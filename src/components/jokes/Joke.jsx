

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    return (
        <div className="joke">
            {props.setup && <h3 className="setup">{props.setup}</h3>}
            <p className="punchline">{props.punchline}</p>
            <hr />
        </div>
    )
}