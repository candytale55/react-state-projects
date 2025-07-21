import "./assets/styles.css"


export default function ToggleWindowTracker() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    return (
        <main className="container">
            <h1>I am WindowTracker</h1>
            <button>
                Toggle WindowTracker
            </button>
            <WindowTracker />
        </main>
    )
}