import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  cloud_pct: number;
}

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const city = 'Delhi'; // You can make this dynamic later

  const fetchWeather = async () => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
        {
          headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' },
        }
      );
      setWeatherData(response.data);

      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setLastUpdated(formattedTime);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 5 * 60 * 1000); // Refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[400px] h-auto bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-xl transition">
      <h2 className="text-lg font-semibold mb-2 text-[#38b8e0]">Real-Time Weather</h2>

      {weatherData ? (
        <>
          <div className="mb-2">
            <p className="text-gray-700 text-xl font-bold">{city}, IN 🇮🇳</p>
            <p className="text-2xl font-semibold text-gray-800">🌤️ {weatherData.temp}°C</p>
            <p className="text-sm text-gray-500 italic">
              Feels like {weatherData.feels_like}°C
            </p>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mt-4">
            <div>
              <p>Humidity</p>
              <p className="font-medium">{weatherData.humidity}%</p>
            </div>
            <div>
              <p>Wind</p>
              <p className="font-medium">{weatherData.wind_speed} km/h</p>
            </div>
            <div>
              <p>Condition</p>
              <p className="font-medium">
                {weatherData.cloud_pct > 50 ? 'Cloudy' : 'Clear'}
              </p>
            </div>
          </div>

          <p className="text-[12px] text-gray-400 mt-4">Last updated: {lastUpdated}</p>
        </>
      ) : (
        <p className="text-gray-500 text-sm mt-4">Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherCard;
