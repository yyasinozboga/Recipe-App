import React from "react";

const NoResults = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src="/src/assets/images/no_results.png"
        alt="no results image"
        className="size-24"
      />

      <h2 className="text-lg font-handlee text-jet">
        No search results found!
      </h2>
    </div>
  );
};

export default NoResults;
