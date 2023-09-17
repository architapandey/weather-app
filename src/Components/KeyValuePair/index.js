import React from "react";

const KeyValuePair = ({ title, value }) => {
  return (
    <div className="md:text-md  text-gray-600 font-semibold my-1">
      <span className="font-bold  text-gray-900 dark:text-black">{title}:</span>{" "}
      {value}
    </div>
  );
};

export default KeyValuePair;
