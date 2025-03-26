import React, { useState } from 'react';

const ToggledGreeting = () => {
  const [isHello, setIsHello] = useState(true);

  const toggleGreeting = () => {
    setIsHello(prev => !prev);
  };

  return (
    <div className="toggled-greeting-widget">
      <h2>Toggled Greeting Widget</h2>
      <p>{isHello ? 'Hello' : 'Goodbye'}</p>
      <button onClick={toggleGreeting}>Toggle Me</button>
    </div>
  );
};

export default ToggledGreeting; 