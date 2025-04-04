import { useRef, useState } from "react";
import '../styles/rgb-slider.scss';
export default function RgbSlider() {
    const [rgbValues, setRgbValues] = useState({
        red: 0,
        green: 0,
        blue: 0
    });

    function handleSliderChange(e) {
        const { name, value } = e.target;
        setRgbValues(prev => ({
            ...prev,
            [name]: parseInt(value)
        }));
    }

    const colorBoxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: `rgb(${rgbValues.red}, ${rgbValues.green}, ${rgbValues.blue})`,
        margin: '20px auto',
        border: '1px solid #ccc'
    };

    return (
        <div className="rgb-slider-widget">
            <h1>RGB Slider</h1>
            <div style={colorBoxStyle}></div>
            <div className="color-values">
                <p>Red: {rgbValues.red}</p>
                <p>Green: {rgbValues.green}</p>
                <p>Blue: {rgbValues.blue}</p>
            </div>
            <div className="slider-container">
                <div>
                    <label>Red: </label>
                    <input type="range" id="red" name="red" min="0" max="255" value={rgbValues.red} onChange={handleSliderChange} />
                </div>
                <div>
                    <label>Green: </label>
                    <input type="range" id="green" name="green" min="0" max="255" value={rgbValues.green} onChange={handleSliderChange} />
                </div>
                <div>
                    <label>Blue: </label>
                    <input type="range" id="blue" name="blue" min="0" max="255" value={rgbValues.blue} onChange={handleSliderChange} />
                </div>
            </div>
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple RGB slider widget. Use the sliders to change the color of the box.</p>
            </div>
        </div>
    )
}
