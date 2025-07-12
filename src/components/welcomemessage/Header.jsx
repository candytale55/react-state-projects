import React from "react"
import avatar from "./icons/user.png"
import './assets/styles.css'


export default function Header(props) {
    

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}