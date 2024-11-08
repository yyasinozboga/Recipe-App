import React from "react";

const Item = ({ icon, text, value }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-2 uppercase text-jet font-medium">
        {icon} {text}
      </span>
      <span className="text-jet font-medium uppercase">
        {typeof value === "number" ? value.toFixed(2) : value}
      </span>
    </div>
  );
};

export default Item;
