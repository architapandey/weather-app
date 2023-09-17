import React, { useContext, useEffect } from "react";
import "./App.css";
import { fetchWeatherData } from "./utils/api";
import { AppContext } from "./utils/context";
import SearchBar from "./Components/SearchBar";
import WeatherDetails from "./Components/WeatherDetails";

function App() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const city = localStorage.getItem("city");

    if (city) {
      fetchWeatherData(city, dispatch);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        fetchWeatherData(
          `${location?.coords?.latitude},${location?.coords?.longitude}`,
          dispatch
        );
      });
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-tl from-blue-200 via-orange-50 to-blue-300">
      <h4 className="text-3xl font-extrabold  text-center pt-6 mb-2">
        Weather Forecast
      </h4>
      <SearchBar />
      <WeatherDetails />
    </div>
  );
}

export default App;
