import '../App.css';
import React, { useEffect, useState } from 'react';

export default function Tracker({ city }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
                );
                if (!response.ok) throw new Error('Erro!');
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city, apiKey]);

    if (loading) return <p>Carregando...</p>;
    if (!weatherData) return <p>Erro ao carregar dados.</p>;

    return (
        <>
            <div className='climate-container'>
                <div>
                    <h3>
                        {weatherData.location.name},{' '}
                        {weatherData.location.region},
                        {weatherData.location.country}
                    </h3>
                </div>
                <div className='row'>
                    <div>
                        <h1 className='temperature'>
                            {Math.trunc(weatherData.current.temp_c)} °C
                        </h1>
                    </div>
                    {/* Weather Image */}
                    <div>
                        <img
                            className='weather-icon'
                            src={weatherData.current.condition.icon}
                            alt={weatherData.current.condition.text}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
