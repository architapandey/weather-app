import React, { useContext } from "react";
import { AppContext } from "../../utils/context";
import KeyValuePair from "../KeyValuePair";

const TodayForecastCard = () => {
  const { state } = useContext(AppContext);
  const { weatherData, isCelcius } = state;

  const weatherCode = weatherData.current.condition.code;

  return (
    <>
      <h4 className="md:text-2xl font-bold tracking-tight text-black text-center mt-8 mb-4">
        Today's Forecast
      </h4>
      <div className="rounded-lg shadow-2xl bg-gray-50 mt-6 p-4 flex justify-evenly items-center">
        <div>
          <KeyValuePair
            title="Temperature"
            value={
              isCelcius
                ? `${weatherData?.current.temp_c}°C`
                : `${weatherData?.current.temp_f}°F`
            }
          />
          <KeyValuePair
            title="Feels Like"
            value={
              isCelcius
                ? `${weatherData?.current.feelslike_c}°C`
                : `${weatherData?.current.feelslike_f}°F`
            }
          />
          <KeyValuePair
            title="Humidity"
            value={`${weatherData?.current.humidity}%`}
          />
          <KeyValuePair
            title="Condition"
            value={weatherData?.current.condition.text}
          />
          <KeyValuePair
            title="Wind"
            value={`${weatherData?.current.wind_kph} KPH`}
          />
          <KeyValuePair
            title="Wind Direction"
            value={weatherData?.current.wind_dir}
          />
        </div>
        <img className="h-[80px]" src={weatherData?.current.condition.icon} />
      </div>
    </>
  );
};

export default TodayForecastCard;
