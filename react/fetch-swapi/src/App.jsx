import {useState, useEffect} from 'react';

export default function App() {
    const [people, setPeople] = useState([]);
    const [planetInfo, setPlanetInfo] = useState({});

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => setPeople(data.results))
            .catch(err => console.error("Error fetching data: ", err));            
    }, []);

    const showHomePlanet = async (person) => {
        setPlanetInfo(prev => ({...prev, [person.name]: 'loading'}));
        try {
            const response = await fetch(person.homeworld);
            const data = await response.json();
            setPlanetInfo(prev => ({...prev, [person.name]: data.name}));
        } catch (err) {
            console.error("Error fetching planet: ", err);
        }
    };

    return (
        <div>
            <h1>SW Characters</h1>
            {people.map((person) => (
                <div key={person.name}>
                    <h2>{person.name}</h2>
                    {planetInfo[person.name] === 'loading' ? (
                        <p>Loading...</p>
                    ) : planetInfo[person.name] ? (
                        <p>Home Planet: {planetInfo[person.name]}</p>
                    ) : (
                        <button onClick={() => showHomePlanet(person)}>
                            Show Home Planet
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}