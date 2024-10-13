"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "Careers", path: "/" },
  ];

  return (
    <>
      <nav className="w-full h-24 flex justify-between items-center sm:px-10 px-6">
        <Image
          src="/images/pie_logo.png"
          width={160}
          height={48}
          alt="logo"
          priority
        />
        <ul
          className={`${
            open
              ? "nav-links xl:gap-8 gap-6 active"
              : "nav-links xl:gap-8 gap-6"
          }`}
        >
          <div
            className="close-btn bg-primary h-8 w-8 flex justify-center items-center"
            onClick={() => setOpen(false)}
          >
            <i class="fa-solid fa-xmark text-white text-xl"></i>
          </div>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-white hover:text-[#f2f2f2]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="menu-btn bg-primary h-8 w-8 flex justify-center items-center"
          onClick={() => setOpen(true)}
        >
          <i class="fa-solid fa-bars text-white text-xl"></i>
        </div>
        <div className="btn sm:block hidden">
          <Button text="Get in touchs" />
        </div>
      </nav>
      <div
        className={`offcanvas__overlay ${open ? "overlay-open" : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
};

export default Navbar;
