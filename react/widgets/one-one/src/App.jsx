import { Component } from 'react'
import Counter from './components/counter.jsx'
import ToggleGreeting from './components/toggle-greeting.jsx'
import ShowHide from './components/show-hide.jsx'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app-main'>
        <Counter/>
        <ToggleGreeting/>
        <ShowHide/>
      </div>
    )
  }
}

export default App
