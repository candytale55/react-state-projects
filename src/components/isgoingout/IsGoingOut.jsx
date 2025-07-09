import { useState } from 'react'
import './assets/styles.css'


/**
 * Challenge: 
 * - Initialize state for `isGoingOut` as a boolean
 * - Make it so clicking the button flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
 * 
 * This also work: 
 * <button onClick={() => {setIsGoingOut(!isGoingOut)}} className="value">{isGoingOut ? "Yes" : "No"}</button>
 * 
 */


export default function IsGoingOut() {

    const [isGoingOut, setIsGoingOut] = useState(false)
    
    const toggle = () => {
        console.log("toggle")
        setIsGoingOut(prev => !prev);
    }

   

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button
                className="value"
                onClick={toggle}
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}