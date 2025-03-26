import { Component } from 'react';
import '../styles/counter.scss'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        };
    }

    render() {
        return (
            <div className='counter-widget'>
                <h2>Counter Widget</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: Math.max(1,this.state.count - 1) })}>Subtract</button>
            </div>
        );
    }
}

export default Counter;
