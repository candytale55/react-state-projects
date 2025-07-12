import Joke from "./Joke"
import jokesData from "./assets/jokesData"
import './assets/styles.css'

export default function Jokes() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}