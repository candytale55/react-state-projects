import React from 'react';
import './assets/styles.css'

/**
 * Challenge: add another label and input for the password field
 */

export default function RegForm() {
    return (
        <section>
            <h1>Registration Form</h1>
            <form action="/api/my-server-code.php" method="POST" id="my-form">
                <label htmlFor="first-name">First Name: </label>
                <input type="text" id="first-name" name="firstName" className="input" />
                <br />
                <label htmlFor="last-name">Last Name: </label>
                <input type="text" id="last-name" name="lastName" className="input" />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </section>
    )
}
