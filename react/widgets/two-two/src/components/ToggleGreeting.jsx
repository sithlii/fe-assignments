import { useState } from 'react';
import '../styles/greeting.scss'

function ToggleGreeting() {
    const [hello, setHello] = useState("Greetings.");

    function toggleMessage() {
        setHello(hello === "Greetings." ? "Salutations." : "Greetings.");
    }

    return (
        <div className="greeting-widget">
            <h2>Greeting Widget</h2>
            <p>New Message: "{hello}"</p>
            <button onClick={toggleMessage}>Toggle Me</button>
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple greeting widget. Click the button to toggle the message.</p>
            </div>
        </div>
    );
}

export default ToggleGreeting;