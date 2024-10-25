import React from 'react'
import Button from "./Button";
import Image from "next/image";


function Hero({text , textP}) {
  return (
    <div>
          <div className="flex justify-center items-center flex-col gap-10 h-screen relative  ">
        <div className="absolute sm:top-24 -z-10">
          <Image src="/images/home_bg.png" width={835} height={695} alt="" />
        </div>
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-[40px] font-semibold text-white text-center leading-[1.1]">
          <span className="gradient-text">{text}</span>
        </h1>
        <p className="text-[#b2b2b2] xl:w-2/5 sm:w-2/3 w-4/5 text-center sm:!leading-normal sm:pb-8 pb-4 !leading-relaxed">
          {textP}
        </p>
        <Button text="Let’s Talk" />
      </div>
    </div>
  )
}

export default Hero