import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="p-2 md:p-5 flex flex-col gap-3 items-center my-5">
      <h1 className="text-orange font-handlee text-2xl z-50">{subtitle}</h1>
      <h1 className="text-4xl md:text-5xl font-bold text-jet z-50">{title}</h1>
    </div>
  );
};

export default Title;
