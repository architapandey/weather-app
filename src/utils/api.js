import axios from "axios";

export const fetchWeatherData = (location, dispatch) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no&days=3`;
  dispatch({ type: "SET_LOADING", payload: true });
  axios
    .get(url)
    .then((response) => {
      dispatch({ type: "SET_WEATHER_DATA", payload: response.data });
    })
    .catch((error) => {
      const message = error?.response?.data?.error?.message;
      dispatch({
        type: "SET_ERROR",
        payload: message ?? "Please try again",
      });
    })
    .finally(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
};
