import React from "react"
import './assets/styles.css'

export default function Body(props) {
    
    return (
        <section>
            <h1>Welcome back, {props.userName}!</h1>
        </section>
    )
}