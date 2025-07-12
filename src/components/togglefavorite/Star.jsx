import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"
import './assets/styles.css'

export default function Star({isFilled}) {

    let starIcon = isFilled ? starFilled : starEmpty;


    return (
        <div>
            <button
                aria-pressed={isFilled}
                aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
                className="favorite-button"
                >    
                <img
                    src={starIcon}
                    alt={isFilled ? "filled star icon" : "empty star icon"}
                    className="favorite"
                    />
            </button>
        </div>
    )
}