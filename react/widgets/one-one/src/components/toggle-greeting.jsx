import {Component} from 'react'
import '../styles/greeting.scss'

class ToggleGreeting extends Component {
    constructor() {
        super();
        this.state = {
            hello: "Greetings.",
            farewell: "Salutations."
        };
    }

    toggleMessage = () => {
        this.setState(prevState => ({hello: prevState.hello === "Greetings." ? "Salutations." : "Greetings."}));
    };

    render() {
        return (
            <div className="greeting-widget">
                <h2>Greeting Widget</h2>
                <p>New Message: "{this.state.hello}"</p>
                <button onClick={this.toggleMessage}>Toggle Me</button>
            </div>
        )
    }
}

export default ToggleGreeting;