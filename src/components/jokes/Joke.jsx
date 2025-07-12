import React from "react"
import './assets/styles.css'

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    const [isShown, setIsShown] = React.useState(true)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    console.log(isShown)

    return (
        <div className="joke">
            {props.setup && <h3 className="setup">{props.setup}</h3>}
            <p className="punchline">{props.punchline}</p>
            <button
                onClick={toggleShown}
            >Show Punchline</button>
            <hr />
            
        </div>
    )
}