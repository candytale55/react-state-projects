import { useState } from 'react'
import ClickMe from './components/clickme/ClickMe'
import Yes from './components/yes/Yes'
import HowManyTimes from './components/howmany/HowManyTimes'
import IsGoingOut from './components/isgoingout/IsGoingOut'
import MyFavoriteThings from './components/myfavoritethings/MyFavoriteThings'



function App() {
  
  return (
    <main className="container">
      <MyFavoriteThings />
      {/*<IsGoingOut />*/}
      {/*<HowManyTimes />*/}
      {/*<Yes />*/}
      {/*<ClickMe />*/}
    </main>
  )
}

export default App
