import React from 'react';
import './assets/styles.css'

// Check https://scrimba.com/learn-react-c0e/~05xv to refresh.

export default function SignUpForm() {

    /**
     * Challenge: get the password from the form too and log
     * it to the console to be sure it came in correctly.
     */

    function signUp(formData) {
        const email = formData.get("email")
        console.log(email)
        const password = formData.get("password")
        console.log(password)
    }


    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" />
                <br />
                <button>Submit</button>

            </form>
        </section>
    )
}

