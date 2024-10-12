import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Banner part */}
      <div className="flex justify-center items-center flex-col gap-10 h-screen relative">
        <div className="absolute xl:top-28 top-16 -z-10">
          <Image src="/images/home_bg.png" width={835} height={695} alt="" />
        </div>
        <h1 className="text-7xl font-semibold text-white text-center leading-[1.1]">
          <span className="gradient-text">Transforming Ideas</span> into
          <span>
            <br />
          </span>
          digital masterpieces
        </h1>
        <p className="text-[#b2b2b2] xl:w-2/5 w-2/3 text-center !leading-normal pb-8">
          Ready to elevate your digital presence? Contact us today for a free
          consultation and see how Django Pie can transform your vision into a
          stunning digital masterpiece.
        </p>
        <Button text="Let’s Talk" />
      </div>
      {/* completed task section */}
      <section className="w-11/12 flex justify-between items-center border-t border-[#525252] mx-auto lg:py-28 py-24 flex-wrap lg:gap-0 gap-8">
        <div className="flex items-center justify-between lg:w-1/2 w-4/5 lg:order-1 order-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-white xl:text-7xl text-5xl font-semibold">
              100+
            </h2>
            <p className="text-primary xl:text-2xl text-xl">
              Project Delivered
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white xl:text-7xl text-5xl font-semibold">
              5.0
            </h2>
            <p className="text-primary xl:text-2xl text-xl">Rating Services</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white xl:text-7xl text-5xl font-semibold">
              50+
            </h2>
            <p className="text-primary xl:text-2xl text-xl">Happy Clients</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end lg:order-2 order-1">
          <p className="xl:text-xl text-lg font-normal text-white xl:leading-loose leading-relaxed tracking-wider text-justify xl:w-4/5 lg:w-11/12">
            Our tailored and client-focused solutions creates experiences that
            keep our clients coming back for more.
          </p>
        </div>
      </section>
      {/* About section */}
      <section className="py-20 xl:w-4/5 w-11/12 mx-auto">
        <div className="about-card flex items-start border-t border-l border-primary justify-between rounded-[4rem] p-20 pt-24">
          <div className="flex flex-col items-start xl:w-2/5 w-1/2">
            <h2 className="text-white xl:text-[80px] text-6xl pb-6 font-semibold tracking-tight">
              About Us
            </h2>
            <h4 className="text-white font-semibold xl:text-5xl text-4xl pb-7 font-sans tracking-tight xl:leading-[1.15] leading-snug">
              International
              <span className="gradient-text">
                {" "}
                Web Development and Design{" "}
              </span>
              Agency with a team of creative professionals
            </h4>
            <p className="text-white text-lg text-opacity-90 xl:pb-11 pb-16 leading-relaxed w-11/12">
              Django Pie crafts tailored web solutions that blend creativity and
              innovation to enhance your online presence and drive business
              growth.
            </p>
            <Button text="See More" />
          </div>
          <div className="w-1/2">
            <Image
              src="/images/about.png"
              className="rounded-br-[11rem] rounded-tr-md rounded-bl-md rounded-tl-md"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
