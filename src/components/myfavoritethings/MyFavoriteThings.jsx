import { useState } from 'react'
import './assets/styles.css'

/**
 * Challenge: you do it!
 * Every time "Add item" is clicked, it should add another string
 * "Test" to the list on the page
 */

export default function MyFavoriteThings() {

    const [myFavoriteThings, setMyFavoriteThings] = useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)


    function addFavoriteThing() {
        setMyFavoriteThings(prevFavs => [...prevFavs, "Test"])
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