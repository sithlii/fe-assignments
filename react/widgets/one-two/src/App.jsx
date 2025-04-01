import Counter from './components/counter.jsx'
import ToggleGreeting from './components/toggle-greeting.jsx'
import ShowHide from './components/show-hide.jsx'

import './App.css'

function App() {
  return (
    <div className='app-main'>
        <Counter/>
        <ToggleGreeting/>
        <ShowHide/>
      </div>
    )
}

export default App;
