import React from "react"
import Header from "./Header"
import Body from "./Body"
import './assets/styles.css'

export default function WelcomeMessage() {
    const [userName, setUserName] = React.useState("Joe")

    return (
        <main className="card">
            <Header userName={userName} />
            <Body userName={userName} />
        </main>
    )
}