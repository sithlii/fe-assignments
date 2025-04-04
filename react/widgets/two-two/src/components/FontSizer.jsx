import { useRef } from "react";
import '../styles/font-sizer.scss';

export default function FontSizer() {
    const paragraphRef = useRef(null);
    const min = 0;
    const max = 100;
    let currentSize = 50;

    function handleFontIncrease() {
        currentSize = Math.min(currentSize + 5, max);
        if (paragraphRef.current) {
            paragraphRef.current.style.fontSize = `${currentSize}px`;
        }
    }

    function handleFontDecrease() {
        currentSize = Math.max(currentSize - 5, min);
        if (paragraphRef.current) {
            paragraphRef.current.style.fontSize = `${currentSize}px`;
        }
    }

    return (
        <div className="font-sizer-widget">
            <p ref={paragraphRef} style={{ fontSize: `${currentSize}px` }}>
                This is a paragraph
            </p>
            <div className="controls">
                <button onClick={handleFontDecrease}>
                    Shrink
                </button>
                <button onClick={handleFontIncrease}>
                    Grow
                </button>
            </div>
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple font sizer widget. Click the buttons to increase or decrease the font size of the paragraph.</p>
            </div>
        </div>
    )
}