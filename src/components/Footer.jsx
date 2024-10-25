import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    // Footer Created by Azka Rehman
    <div className="bg-[#141414] text-white py-8">
      <div className="mx-8 md:mx-24 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and social media section */}
        <div className="flex flex-col flex-1">
          <Image
            src="/images/pie_logo.png"
            width={160}
            height={48}
            alt="logo"
            priority
          />
          <p className="mt-2 max-w-md">
            We’re your innovation partner, delivering cutting-edge solutions that elevate your business to the next level.
          </p>
          <div className="flex gap-4 mt-4">
            <FiFacebook className="text-white bg-[#525252] custom-btn px-2 py-2 w-10 h-10 rounded-full" />
            <BsTwitterX className="text-white bg-[#525252] custom-btn px-2 py-2 w-10 h-10 rounded-full" />
            <IoLogoInstagram className="text-white bg-[#525252] custom-btn px-2 py-2 w-10 h-10 rounded-full" />
            <CiYoutube className="text-white bg-[#525252] custom-btn px-2 py-2 w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Quick Links section */}
        <div className="md:flex md:flex-col flex-1 text-sm">
          <h2 className="font-semibold text-lg">QUICK LINKS</h2>
          <ul className="mt-2 space-y-2">
            <li className="gradient-texthover cursor-pointer">Home</li>
            <li className="gradient-texthover cursor-pointer">Company</li>
            <li className="gradient-texthover cursor-pointer">Services</li>
            <li className="gradient-texthover cursor-pointer">Portfolio</li>
            <li className="gradient-texthover cursor-pointer">Testimonials</li>
            <li className="gradient-texthover cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Contact section */}
        <div className="flex flex-col flex-1">
          <h2 className="font-semibold text-lg">Contact US</h2>
          <p className="mt-2">hello@website.com</p>
          <p className="mt-2">
            Riverside Building, County Hall, London SE1 7PB, United Kingdom
          </p>
          <p className="mt-2">+44 5421234560</p>
        </div>
      </div>

      {/* Horizontal divider */}
      <hr className="border-[#525252] mt-8 mb-2" />

      {/* Footer bottom section */}
      <div className="flex flex-col md:flex-row justify-between mt-1 mx-8 md:mx-24 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms Conditions</p>
          <p className="cursor-pointer">Cookies</p>
        </div>
        <div>
          <p>©2024 DjangoPie. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
