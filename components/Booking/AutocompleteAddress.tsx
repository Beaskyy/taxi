import React from "react";

const AutocompleteAddress = () => {
  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none dark:text-gray-700 focus:border-yellow-300"
        />
      </div>
      <div>
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none dark:text-gray-700 focus:border-yellow-300"
        />
      </div>
    </div>
  );
};

export default AutocompleteAddress;
