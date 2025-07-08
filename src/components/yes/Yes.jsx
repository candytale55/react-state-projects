import React from 'react'
import './assets/styles.css'


/**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

export default function Yes() {
    const result = React.useState("?")
    console.log(result)
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}