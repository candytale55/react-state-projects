import React from 'react';
import './assets/styles.css'

// Check https://scrimba.com/learn-react-c0e/~05xv to refresh.

export default function SignUpForm() {

  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

    function signUp(formData) {
        const email = formData.get("email")
        console.log(email)
        const password = formData.get("password")
        console.log(password)
        const employmentStatus = formData.get("employmentStatus")
        console.log(employmentStatus)
    }


    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" defaultValue="your@email.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" />
                <br />
                <label htmlFor="description">Description: </label>
                <textarea name="description" id="description"></textarea>

                <br />

          <fieldset>
            <legend>Employment Status</legend>
                  <label htmlFor="radioButton">
                      <input id="radioButton1" type="radio" name="employmentStatus" value="unemployed" />
                      Unemployed
                  </label>
                  <label htmlFor="radioButton">
                      <input id="radioButton2" type="radio" name="employmentStatus" value="full-time" defaultChecked />
                      Full-time
                  </label>
                  <label htmlFor="radioButton">
                      <input id="radioButton3" type="radio" name="employmentStatus" value="part-time" />
                      Part-time
                  </label>
                </fieldset>
                
                <br />
                <button>Submit</button>

            </form>
        </section>
    )
}

