import { useRef, useState, useEffect } from 'react';
import './App.css';
import Tracker from './components/Tracker';
import Modal from './components/Modal';
import ThemeToggle from './components/ToggleTheme';

function App() {
    const storedCities = JSON.parse(localStorage.getItem('cities'));
    const [cities, setCities] = useState(() => {
        if (Array.isArray(storedCities) && storedCities.length > 0) {
            return storedCities;
        } else {
            return ['Recife'];
        }
    });
    const modalRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities));
    }, [cities]);

    const handleAddCity = (city) => {
        if (city && !cities.includes(city)) {
            setCities((prev) => [...prev, city]);
        }
        modalRef.current?.close();
    };
    const handleRemoveCity = (removedCity) => {
        setCities((prev) => prev.filter((city) => city !== removedCity));
    };

    return (
        <>
            <div className='header'>
                <h1>Weatherapp</h1>
            </div>
            <ThemeToggle />
            <div>
                <Modal modalRef={modalRef} onSubmit={handleAddCity} />
            </div>
            <div className='tracker-container'>
                {cities.map((city, index) => (
                    <Tracker
                        key={index}
                        city={city}
                        handleRemoveCity={() => handleRemoveCity(city)}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
