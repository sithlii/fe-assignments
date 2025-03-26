import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSubtract = () => {
    setCount(prevCount => Math.max(1, prevCount - 1));
  };

  return (
    <div className="counter-widget">
      <h2>Counter Widget</h2>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
    </div>
  );
};

export default Counter; 