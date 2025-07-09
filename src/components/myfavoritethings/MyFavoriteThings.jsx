import { useState } from 'react'
import './assets/styles.css'
import { all } from 'mathjs'

/**
 * Add items from allFavoriteThings to myFavoriteThings array
 */

export default function MyFavoriteThings() {

    const [myFavoriteThings, setMyFavoriteThings] = useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)


    function addFavoriteThing() {
        setMyFavoriteThings(prevFavs => [
            ...prevFavs,
            allFavoriteThings[prevFavs.length]    
        ])
    }

    return (
        <main>
            <h1>I am MyFavoriteThings</h1>
            <button
                onClick={addFavoriteThing}
            >Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
  }