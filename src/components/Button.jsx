import React from "react";

const Button = ({ text, color, onClick }) => {
  // logic

  // view
  return (
    <div className="mt-auto pt-6 pb-12 w-full flex justify-center">
      <button
        className={`w-full py-4 px-1 block ${color} rounded-3xl text-white text-sm font-medium`}
        type="button"
        onClick={onClick}
      >
        {text || "Get started"}
      </button>
    </div>
  );
};

export default Button;
