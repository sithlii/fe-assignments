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
            <h2>Show/Hide Toggle Widget</h2>
            <button onClick={hideMessage}>{buttonText}</button>
            <p>{message}</p>
        </div>
    );
}

export default ShowHide;