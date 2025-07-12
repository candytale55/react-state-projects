import React from "react"
import './assets/styles.css'

export default function UnreadMessages() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */

    return (
        <div className="container">
            <h1>You have _ unread messages!</h1>
        </div>
    )
}