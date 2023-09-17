import React, { useContext } from "react";
import { AppContext } from "../../utils/context";

const NoDataFound = () => {
  const { state } = useContext(AppContext);
  const { error } = state;

  return (
    <h4 className="text-xl h-custom flex items-center justify-center font-bold">
      {error}
    </h4>
  );
};

export default NoDataFound;
