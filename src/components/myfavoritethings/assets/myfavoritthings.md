
# Notes MyFavoriteThings component

## Don't use push with arrays. 

    const [myFavoriteThings, setMyFavoriteThings] = useState([])

    // DO NOT USE THIS EVER (arr.push)
    // It won't work most of the time and it is modifying the original array
    // it's a NO NO. 
    // Must use the setter state function. 
    
    myFavoriteThings.push("Test")
    console.log(myFavoriteThings)