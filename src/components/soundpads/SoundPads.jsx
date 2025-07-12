
import pads from "./assets/pads"
import "./assets/styles.css"

export default function SoundPads() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                I am SoundPads
                {/* <button>s go here */}
            </div>
        </main>
    )
}