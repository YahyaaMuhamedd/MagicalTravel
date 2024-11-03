'use client'
import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '@/services/weatherservices';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getWeather() {
            const data = await fetchWeatherData();
            if (data) {
                setWeatherData(data);
            } else {
                setError('Could not fetch weather data');
            }
        }
        getWeather();
    }, []);

    return (
        <div className='bg-gray-50 mb-6'>
            <div className=" max-w-md mx-auto p-6 bg-blue-100 rounded-lg shadow-lg text-center">
                {error && <p className="text-red-500">{error}</p>}
                {weatherData ? (
                    <>
                        <h3 className="city-name text-2xl font-semibold text-blue-900">{weatherData.name}</h3>
                        <p className="weather-state text-lg text-gray-700">{weatherData.weather[0].description}</p>
                        <p className="temperature text-4xl font-bold text-blue-900">{Math.round(weatherData.main.temp)}°C</p>
                        <div className="additional-info mt-4 text-gray-600">
                            <p>Humidity: {weatherData.main.humidity}%</p>
                            <p>Wind: {Math.round(weatherData.wind.speed)} m/s</p>
                        </div>
                    </>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </div>
    );
}

export default Weather;
