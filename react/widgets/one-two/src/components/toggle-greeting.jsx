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
        </div>
    );
}

export default ToggleGreeting;