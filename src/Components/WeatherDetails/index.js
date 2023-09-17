import React, { useContext } from "react";
import { AppContext } from "../../utils/context";
import Header from "../Header";
import TodayForecastCard from "../TodayForecastCard";
import ForecastCard from "../ForecastCard";
import Loader from "../Loader";
import NoDataFound from "../NoDataFound";

const WeatherDetails = () => {
  const { state } = useContext(AppContext);
  const { weatherData, isCelcius, loading, error } = state;

  if (loading) return <Loader />;

  if (error) return <NoDataFound />;

  if (weatherData) {
    return (
      <>
        <div className="md:w-[50%] p-6 m-auto ">
          <Header />
          <TodayForecastCard />
        </div>
        {weatherData?.forecast?.forecastday && (
          <h4 className="md:text-2xl font-bold tracking-tight text-black  text-center mt-4 ">
            Next 3 Day's Forecast
          </h4>
        )}
        <div className="flex justify-between items-center flex-wrap gap-4 md:w-[90%] p-6 m-auto">
          {weatherData?.forecast?.forecastday?.map((forecast) => (
            <ForecastCard forecast={forecast} isCelcius={isCelcius} />
          ))}
        </div>
      </>
    );
  }

  return <div className="h-custom" />;
};

export default WeatherDetails;
