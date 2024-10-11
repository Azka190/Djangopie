import React from "react";

const Button = ({ text }) => {
  return (
    <button className="border border-[#0097b2] custom-btn py-2 px-5 rounded-full text-base flex items-center gap-4">
      <span className="gradient-text">{text}</span>
      <div className="button-bg h-7 w-7 flex justify-center items-center rounded-full">
        <i class="fa-solid fa-arrow-right text-xs"></i>
      </div>
    </button>
  );
};

export default Button;
