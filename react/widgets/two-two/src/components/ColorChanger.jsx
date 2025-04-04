import { useState } from "react";
import '../styles/color-changer.scss';

export default function ColorChanger() {
    const [color, setColor] = useState("#000000");
    const [textInput, setTextInput] = useState("");

    function handleTextChange(e) {
        setTextInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            const tempDiv = document.createElement('div');
            tempDiv.style.color = textInput;
            if (tempDiv.style.color !== '') {
                setColor(textInput);
            }
        } catch (error) {
            console.error("Invalid color input");
        }
        setTextInput("");
    }

    return (
        <div className="color-changer-widget">
            <h1 style={{ color: color }}>Color: {color}</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={textInput}
                    onChange={handleTextChange}
                    placeholder="Enter color name or hex code"
                />
                <button type="submit">Update</button>
            </form>
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple color changer widget. Enter a color name or hex code to change the color of the text.</p>
            </div>
        </div>
    )
} 