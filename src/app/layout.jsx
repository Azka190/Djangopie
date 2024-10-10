import React from "react";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "djangopie",
  description: "A Django and Next.js powered website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
