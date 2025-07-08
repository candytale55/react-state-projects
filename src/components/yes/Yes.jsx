import React from 'react'
import './assets/styles.css'

export default function Yes() {
    const result = React.useState("Yes")
    console.log(result)
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}