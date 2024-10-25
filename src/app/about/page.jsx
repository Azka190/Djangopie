import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


function page() {
  return (
    // created by azka rehman
    <>
     <Hero text ="Our Services" textP="Django Pie offers services that blend creativity and innovation to enhance your online presence and drive business growth." />

      {/* about Company Section Created by azka rehman  */}

      <div className="text-white mx-24    ">
        <div>
          <h2 className="lg:text-5xl md:text-4xl sm:text-4xl  font-semibold text-white  lg:mb-24   ">
            We are here to create intuitive,{" "}
            <span className="gradient-text">user-friendly</span> websites and
            transform creative visions into impactful{" "}
            <span className="digital reality.">digital reality.</span>
          </h2>
        </div>
        <img
          src="/images/Ellipse.png"
          alt=""
          className="absolute lg:-mt-44 lg:ml-[1252px]  sm:-mt-44 sm:ml-[1000px] w-20 hidden lg:block  "
        />
        <div className="md:flex gap-9">
          <div>
            <img
              src="/images/Placeholder.png"
              alt="img"
              className="md:w-[800px] sm:w-32 mt-3"
            />
          </div>
          <div>
            <div className="">
              <h2 className="text-2xl font-semibold mt-5">Our Mission</h2>
              <p className="mr-20">
                At Django Pie, our mission is to develop intuitive and
                user-centric websites that bring visionary concepts to life,
                delivering seamless digital experiences that bridge businesses
                and their audiences.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mt-7">Our Vision</h2>
              <p className="mr-20">
                Our vision is to be the leading web development and design
                agency, renowned for turning innovative concepts into dynamic
                online platforms that empower clients and inspire users
                worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section  */}

      <div className="mt-20 mx-24 text-white ">
        <div className="text-center">
          <h1 className="lg:text-6xl  text-4xl font-semibold mb-6">
            Meet the team
          </h1>
          <p className="md:mx-60">
            Our team is a diverse group of talented professionals, each bringing
            unique skills and a shared passion for innovation and excellence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 sm:justify-center">
          <div>
            <img src="/images/team1.png" alt="Team Member" />
            <h3 className="font-semibold mt-3">John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div>
            <img src="/images/team2.png" alt="Team Member" />
            <h3 className="font-semibold mt-3">Jacob Carter</h3>
            <p>Co-Founder</p>
          </div>
          <div>
            <img src="/images/team3.png" alt="Team Member" />
            <h3 className="font-semibold mt-3">Anna Michael</h3>
            <p>HR Manager</p>
          </div>
          <div className="mt-4">
            <img src="/images/team4.png" alt="Team Member" />
            <h3 className="font-semibold mt-3">Elsa Maverick</h3>
            <p>Human Resources Manager</p>
          </div>
          <div className="mt-4">
            <img src="/images/team5.png" alt="Team Member" />
            <h3 className="font-semibold mt-3">Jordan Mike</h3>
            <p>Senior Developer</p>
          </div>
          <div className="mt-4">
            <img src="/images/team6.png" alt="Team Member" />
            <h3 className="font-semibold mt-3">Adam Smith</h3>
            <p>Senior Designer</p>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}

export default page;
