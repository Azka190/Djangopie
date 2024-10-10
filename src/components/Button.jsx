import React from "react";
import Image from "next/image";

const Button = ({ text }) => {
  return (
    <button className="border border-[#0097b2] gradient-text py-2 px-5 rounded-full text-base flex items-center gap-4">
      {text}
      <div className="button-bg h-7 w-7 flex justify-center rounded-full">
        <Image
          src="/icons/arrow.svg"
          width={20}
          height={14}
          alt="arrow right"
          priority
        />
      </div>
    </button>
  );
};

export default Button;
