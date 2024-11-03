// weatherService.js

const API_KEY = 'd76dfe2333599649d1b0861d9ae2aa9f'; // Replace with your actual OpenWeatherMap API key
const CITY = 'Hurghada';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

export async function fetchWeatherData() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch weather data');

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}
