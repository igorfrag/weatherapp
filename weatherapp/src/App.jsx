import { useState } from 'react';
import './App.css';
import Tracker from './components/Tracker';

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Weatherapp - Climate Tracking</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    New tracker
                </button>
            </div>
            <div className='tracker-container'>
                <Tracker city={'Recife'} />
            </div>
        </>
    );
}

export default App;
