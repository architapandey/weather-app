import React, { useContext } from "react";
import { AppContext } from "../../utils/context";

const Switch = () => {
  const {
    state: { isCelcius },
    dispatch,
  } = useContext(AppContext);

  const handleTempatureToggle = () => {
    dispatch({ type: "SET_TEMPERATURE_IDENTIFIER", payload: !isCelcius });
  };

  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        checked={isCelcius}
        onChange={handleTempatureToggle}
      />
      <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-bold">
        {isCelcius ? "( °C )" : "( °F )"}
      </span>
    </label>
  );
};

export default Switch;
