import React from "react"
import Header from "./Header"
import Body from "./Body"
import './assets/styles.css'

export default function WelcomeMessage() {
    return (
        <main className="card">
            <Header />
            <Body />
        </main>
    )
}