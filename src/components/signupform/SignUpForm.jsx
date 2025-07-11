import React from 'react';
import './assets/styles.css'

/**
 * Challenge: add another label and input for the password field
 */

export default function SignUpForm() {
    return (
        <section>
            <h1>Signup form</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" />
                <br />


            </form>
        </section>
    )
}

