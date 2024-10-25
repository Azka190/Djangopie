import React from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <title>
          DjangoPie | Custom Software, Web & Mobile App Solutions & Bespoke
          Designs
        </title>
      </head>
      <body className="antialiased bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
