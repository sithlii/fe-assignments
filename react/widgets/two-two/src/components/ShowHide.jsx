import { useState } from "react";
import '../styles/show-hide.scss'

function ShowHide() {
    const [message, setMessage] = useState("Hide Me");
    const [buttonText, setButtonText] = useState("Hide");

    function hideMessage() {
        setMessage(message ? "" : "Hide Me");
        setButtonText(buttonText === "Hide" ? "Show" : "Hide");
    }

    return (
        <div className="show-hide-widget">
            <h1>Show/Hide Toggle Widget</h1>
            <button onClick={hideMessage}>{buttonText}</button>
            <p>{message}</p>
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple show/hide toggle widget. Click the button to show/hide the message.</p>
            </div>
        </div>
    );
}

export default ShowHide;