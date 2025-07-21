import './assets/styles.css'

export default function CounterSide(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)

    // console.log("Rendered!")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        //.then(data => setStarWarsData(data))

    return (
        <div>
            <h1>I am CounterSide</h1>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}