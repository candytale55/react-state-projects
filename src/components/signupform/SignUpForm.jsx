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
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        console.log(dietaryRestrictions)
        const favColor = formData.get("favColor")
        console.log(favColor)
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
          
          <fieldset>
            <legend>Dietary Restrictions</legend>
            <label htmlFor="checkbox1">
              <input id="checkbox1" type="checkbox" name="dietaryRestrictions" value="kosher" />
              Kosher
            </label>
            <label htmlFor="checkbox2">
              <input id="checkbox2" type="checkbox" name="dietaryRestrictions" value="vegan" />
              Vegan
            </label>
            <label htmlFor="checkbox3">
              <input id="checkbox3" type="checkbox" name="dietaryRestrictions" value="gluten-free" />
              Gluten-free
            </label>
          </fieldset>

          <label htmlFor="favColor"></label>
          <select name="favColor" id="favColor" defaultValue="" required>
            <option value="" disabled>-- Choose a color --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>

                <br />
                <button>Submit</button>

            </form>
        </section>
    )
}

