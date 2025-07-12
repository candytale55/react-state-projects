import React from "react"
import './assets/styles.css'

export default function Joke(props) {
    /**
     * Challenge:
     * Only display the punchline paragraph if `isShown` is true
     */

    
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    console.log(isShown)

    return (
        <div className="joke">
            {props.setup && <h3 className="setup">{props.setup}</h3>}
            {isShown && <p className="punchline">{props.punchline}</p>}
            <button
                onClick={toggleShown}
            >Show Punchline</button>
            <hr />
            
        </div>
    )
}