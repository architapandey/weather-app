import React, { useContext, useState } from "react";
import { fetchWeatherData } from "../../utils/api";
import { AppContext } from "../../utils/context";

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);

  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location) {
      localStorage.setItem("city", location);
      fetchWeatherData(location, dispatch);
    }
  };

  return (
    <div className="md:w-[50%] p-6 m-auto">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location / US Pin Code"
          value={location}
          required
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 h-12"
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
