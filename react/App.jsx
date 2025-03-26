import React from 'react';
import UserInfo from './UserInfo';
import Counter from './Counter';
import ToggledGreeting from './ToggledGreeting';
import ShowHideToggle from './ShowHideToggle';

class App extends React.Component {
  render() {
    const userData = {
      name: "John Doe",
      age: 30,
      city: "New York"
    };

    return (
      <div className="app">
        <h1>React Components Demo</h1>
        
        <UserInfo user={userData} />
        <Counter />
        <ToggledGreeting />
        <ShowHideToggle />
      </div>
    );
  }
}

export default App; 