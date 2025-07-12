import React from "react"
import './assets/styles.css'

export default function UnreadMessages() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     * Display the number of unread messages
     */

    return (
        <div className="container">
            { unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
    )
}