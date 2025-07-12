import React from "react"
import avatar from "./icons/user.png"
import './assets/styles.css'


export default function Header() {
    const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}