import React from 'react'
import './assets/styles.css'


/**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

export default function Yes() {
    const [isImportant, func] = React.useState("Yeap")
    console.log(isImportant)
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{isImportant}</button>
        </main>
    )
}