import { useEffect, useState } from "react";
import '../styles/weather.scss';

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [shouldFetch, setShouldFetch] = useState(false);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        if (city.trim()) {
            setIsLoading(true);
            setError(null);
            setShouldFetch(true);
        }
    };

    useEffect(() => {
        if (!shouldFetch) return;

        const fetchWeather = async () => {
            try {
                const response = await fetch(`http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_API_KEY}&query=${city}`);
                const data = await response.json();
                
                if (data.error) {
                    throw new Error(data.error.info || 'Failed to fetch weather data');
                }
                
                setWeather(data);
            } catch (err) {
                setError(err.message);
                setWeather(null);
            } finally {
                setIsLoading(false);
                setShouldFetch(false);
            }
        };
        
        fetchWeather();
    }, [shouldFetch, city]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="weather-widget">
            <h1>Weather Widget</h1>
            <div className="search-container">
                <input 
                    type="text" 
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Enter city name"
                />
                <button onClick={handleSearch}>Get Weather</button>
            </div>
            {weather && (
                <div>
                    <h2>{weather.location.name}</h2>
                    <p>Temperature: {weather.current.temperature}°C</p>
                    <p>Local Time: {weather.location.localtime}</p>
                    <p>Weather: {weather.current.weather_descriptions[0]}</p>
                </div>
            )}
            <div className="description">
                <h3>Description:</h3>
                <p>This is a simple weather widget. Enter a city name and click the button to get the local weather.</p>
            </div>
        </div>
    );
}