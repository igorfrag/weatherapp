import { useRef, useState } from 'react';
import './App.css';
import Tracker from './components/Tracker';
import Modal from './components/Modal';

function App() {
    const [cities, setCities] = useState(['recife']);
    const modalRef = useRef(null);

    const handleAddCity = (city) => {
        if (city && !cities.includes(city)) {
            setCities((prev) => [...prev, city]);
        }
        modalRef.current?.close();
    };

    return (
        <>
            <h1>Weatherapp - Climate Tracking</h1>
            <div className='card'>
                <Modal modalRef={modalRef} onSubmit={handleAddCity} />
            </div>
            <div className='tracker-container'>
                {cities.map((city, index) => (
                    <Tracker key={index} city={city} />
                ))}
            </div>
        </>
    );
}

export default App;
