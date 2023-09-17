import React from "react";
import dayjs from "dayjs";
import KeyValuePair from "../KeyValuePair";

const ForecastCard = ({ forecast, isCelcius }) => {
  const date = dayjs(forecast.date);
  const dayOfWeek = date.format("dddd");

  return (
    <div class="w-full md:w-[30%] rounded-lg shadow-xl p-4  flex justify-between items-center flex-wrap bg-gray-50">
      <div>
        <div className="font-bold mb-6">
          {dayOfWeek} ({forecast.date})
        </div>
        <KeyValuePair
          title="Min Temperature"
          value={
            isCelcius
              ? `${forecast?.day?.mintemp_c}°C`
              : `${forecast?.day?.mintemp_f}°F`
          }
        />
        <KeyValuePair
          title="Max Temperature"
          value={
            isCelcius
              ? `${forecast?.day?.maxtemp_c}°C`
              : `${forecast?.day?.maxtemp_f}°F`
          }
        />
        <KeyValuePair
          title="Humidity"
          value={`${forecast?.day?.avghumidity}%`}
        />
        <KeyValuePair
          title="Wind"
          value={`${forecast?.day?.maxwind_kph} KPH`}
        />
        <KeyValuePair title="Condition" value={forecast?.day?.condition.text} />
      </div>
      <img className="h-[80px]" src={forecast?.day.condition.icon} />
    </div>
  );
};

export default ForecastCard;
