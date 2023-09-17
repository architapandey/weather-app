import React, { useContext } from "react";
import Switch from "../Switch";
import { AppContext } from "../../utils/context";

const Header = () => {
  const { state } = useContext(AppContext);
  const { weatherData } = state;
  return (
    <div className="flex justify-between items-center mt-4 rounded-lg">
      <h4 className="md:text-2xl font-bold tracking-tight text-black">
        <span className="text-gray-500">Weather in</span>{" "}
        {weatherData?.location.name}
      </h4>
      <Switch />
    </div>
  );
};

export default Header;
