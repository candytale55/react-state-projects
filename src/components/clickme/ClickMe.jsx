import './assets/styles.css'
import placeholderPhoto from './assets/placeholder-pic.jpg'


export default function ClickMe() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function handleHover() {
    console.log("You are hovering above me. Hey, aren't you going to click the button?")
  }

  /**
     * Challenge: Log something to the console when the mouse
     * hovers over the image
     * https://react.dev/learn/responding-to-events
     * https://react.dev/reference/react-dom/components/common#mouseevent-handler
     */

  return (
    <main className="container">
      <h2>I am ClickMe</h2>      
      <img
        src={placeholderPhoto}
        alt="Placeholder image from Picsum"
        onMouseOver={handleHover}
      />
      <button
        onClick={handleClick}
      >Click me</button> 
    </main>
  )
}