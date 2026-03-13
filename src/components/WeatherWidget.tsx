import { useState, useEffect } from "react";
import {
  WEATHER_API_BASE_URL,
  DEFAULT_CITY,
  WEATHER_UNIT,
  WEATHER_LANG,
} from "../constants/api";

type WeatherData = {
  weather: { icon: string }[];
  main: { temp: number };
  name: string;
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `${WEATHER_API_BASE_URL}?q=${DEFAULT_CITY}&units=${WEATHER_UNIT}&lang=${WEATHER_LANG}&appid=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error();

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(true);
        console.error("Fehler beim Laden des Wetters:", err);
      }
    };

    fetchWeather();
  }, []);

  if (error)
    return (
      <div className="text-yellow-400 p-4">
        Wetter konnte nicht geladen werden.
      </div>
    );
  if (!weather)
    return (
      <div className="animate-pulse text-yellow-400 p-4">Wird geladen...</div>
    );

  return (
    <div className="flex items-center gap-4 bg-zinc-900 border-2 border-yellow-400 p-4 rounded-xl">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather icon"
      />
      <div>
        <p className="text-2xl font-bold text-white">
          {Math.round(weather.main.temp)}°C
        </p>
        <p className="text-sm text-yellow-400 uppercase tracking-wider">
          {weather.name}
        </p>
      </div>
    </div>
  );
};

export default WeatherWidget;
