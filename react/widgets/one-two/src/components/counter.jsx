import { useState } from 'react';
import '../styles/counter.scss'

function Counter() {
    const [count, setCount] = useState(1);

    return (
        <div className='counter-widget'>
            <h2>Counter Widget</h2>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(Math.max(1, count - 1))}>Subtract</button>
        </div>
    );
}

export default Counter;
