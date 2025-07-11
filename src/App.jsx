import { useState } from 'react'
import ClickMe from './components/clickme/ClickMe'
import Yes from './components/yes/Yes'
import HowManyTimes from './components/howmany/HowManyTimes'
import IsGoingOut from './components/isgoingout/IsGoingOut'
import MyFavoriteThings from './components/myfavoritethings/MyFavoriteThings'
import ToggleFavorite from './components/togglefavorite/ToggleFavorite'



function App() {
  
  return (
    <main className="container">
      <ToggleFavorite />
      {/*<MyFavoriteThings />*/}
      {/*<IsGoingOut />*/}
      {/*<HowManyTimes />*/}
      {/*<Yes />*/}
      {/*<ClickMe />*/}
    </main>
  )
}

export default App
