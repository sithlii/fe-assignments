import { useState } from 'react';
import '../styles/counter.scss'

function Counter() {
    const [count, setCount] = useState(1);

    return (
        <div className='counter-widget'>
            <h1>Counter Widget</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(Math.max(1, count - 1))}>Subtract</button>
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple counter widget that allows you to add and subtract from a count. Pretty self-explanatory.</p>
            </div>
        </div>
    );
}

export default Counter;
