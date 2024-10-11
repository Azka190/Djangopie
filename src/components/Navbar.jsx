import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "Careers", path: "/" },
  ];

  return (
    <nav className="w-full h-24 flex justify-between items-center px-10">
      <Image
        src="/images/pie_logo.png"
        width={160}
        height={48}
        alt="logo"
        priority
      />
      <ul className="flex items-center gap-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path} className="text-white hover:text-[#f2f2f2]">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button text="Get in touchs" />
    </nav>
  );
};

export default Navbar;
