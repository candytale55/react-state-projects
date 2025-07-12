import React from "react"
import './assets/styles.css'

export default function UnreadMessages() {
    const [messages, setMessages] = React.useState(["a", "b"])
    let text

    if (messages.length === 0) {
        text = "You're all caught up!"
    } else if (messages.length === 1) {
        text = "You have 1 unread message"
    } else {
        text = `You have ${messages.length} unread messages`
    }

    return (
        <div className="container">
            <h1>{text}</h1>
        </div>
    )
}