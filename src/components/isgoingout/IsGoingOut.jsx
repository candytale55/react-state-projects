
import './assets/styles.css'



export default function IsGoingOut() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = false

    let answer = isGoingOut ? "Yes" : "No"  // 👈 Use ternary here


    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{answer}</button>
        </main>
    )
}