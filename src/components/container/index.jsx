import React from "react";

const Container = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full xl:w-full mx-auto gap-5 my-5">
      {children}
    </div>
  );
};

export default Container;
