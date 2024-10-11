import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 h-screen relative">
      <div className="absolute top-28 -z-10">
        <Image src="/images/home_bg.png" width={835} height={695} alt="" />
      </div>
      <h1 className="text-7xl font-semibold text-white text-center leading-[1.1]">
        <span className="gradient-text">Transforming Ideas</span> into
        <span>
          <br />
        </span>
        digital masterpieces
      </h1>
      <p className="text-[#b2b2b2] w-2/5 text-center !leading-normal pb-8">
        Ready to elevate your digital presence? Contact us today for a free
        consultation and see how Django Pie can transform your vision into a
        stunning digital masterpiece.
      </p>
      <Button text="Let’s Talk" />
    </div>
  );
}
