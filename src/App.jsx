import { useState } from 'react'
import ClickMe from './components/clickme/ClickMe'
import Yes from './components/yes/Yes'
import HowManyTimes from './components/howmany/HowManyTimes'
import IsGoingOut from './components/isgoingout/IsGoingOut'
import MyFavoriteThings from './components/myfavoritethings/MyFavoriteThings'
import ToggleFavorite from './components/togglefavorite/ToggleFavorite'
import SignUpForm from './components/signupform/SignUpForm'
import RegForm from './components/regform/RegForm'




function App() {
  
  return (
    <main className="container">
      <SignUpForm />
      {/*<RegForm />*/}
      {/*<ToggleFavorite />*/}
      {/*<MyFavoriteThings />*/}
      {/*<IsGoingOut />*/}
      {/*<HowManyTimes />*/}
      {/*<Yes />*/}
      {/*<ClickMe />*/}
    </main>
  )
}

export default App
