"use client";
import React, { useState } from "react";
import logo from "../../assets/images/sa-logo.png";
import adBanner from "../../assets/images/BONITS-Banners-2400-+-500px-e1683925065519.png";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = () => {
    window.location.href = "/"; // Replace '/' with the desired homepage URL
  };

  return (
    <div>
      <a href="https://www.bonitsinc.com/" target="_blank" rel="noreferrer">
        <Image className="mvp-leader1" src={adBanner} alt="ads banner" />
      </a>
      <nav className="sticky top-0 bg-black-black py-2">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Icon */}
            <div className="flex-1 flex"></div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="mx-12">
              <Image
                src={logo}
                alt="billionaire kenya"
                className="logo-now"
                onClick={handleRedirect}
                style={{ cursor: "pointer" }}
              />
            </div>

            {/* Social Media Links */}
            <div className="hidden flex-1 md:flex justify-end ml-auto md:items-center navsocial">
              <a
                href="https://web.facebook.com/Billionaires.Africa?_rdc=1&_rdr"
                className="px-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="px-3"
                href="https://www.instagram.com/billionaires.africa/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="px-3"
                href="https://www.linkedin.com/company/billionaires-africa/about/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/NineZeroClub"
                className="px-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCjqaHRnRz3N5gUk2H2hQI-A"
                className="px-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Navigation Items */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-2`}>
            <nav className="navitemstwo">
              <div className="flex flex-col">
                <p onClick={handleRedirect} className="pb-2">
                  Home
                </p>
                <a
                  href="https://billionaires.africa/category/north-africa/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  North Africa
                </a>
                <a
                  href="https://billionaires.africa/category/horn-of-africa/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Horn Of Africa
                </a>
                <a
                  href="https://billionaires.africa/category/east-africa/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  East Africa
                </a>
                <a
                  href="https://billionaires.africa/category/west-central-africa/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  West & Central Africa
                </a>
                <a
                  href="https://billionaires.africa/category/southern-africa/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Southern Africa
                </a>
                <a
                  href="https://billionaires.africa/category/latest-news/hot-news/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Latest
                </a>
                <a
                  href="https://billionaires.africa/category/latest-news/exclusive/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Exclusive
                </a>
                <a
                  href="https://billionaires.africa/about-us/"
                  className="pb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </nav>

      <nav className="bg-white-800 navitems hidden md:block mt-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-16">
            <p onClick={handleRedirect} className="px-3">
              Home
            </p>
            <a
              href="https://billionaires.africa/category/north-africa/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              North Africa
            </a>
            <a
              href="https://billionaires.africa/category/horn-of-africa/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              Horn Of Africa
            </a>
            <a
              href="https://billionaires.africa/category/east-africa/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              East Africa
            </a>
            <a
              href="https://billionaires.africa/category/west-central-africa/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              West & Central Africa
            </a>
            <a
              href="https://billionaires.africa/category/southern-africa/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              Southern Africa
            </a>
            <a
              href="https://billionaires.africa/category/latest-news/hot-news/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              Latest
            </a>
            <a
              href="https://billionaires.africa/category/latest-news/exclusive/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              Exclusive
            </a>
            <a
              href="https://billionaires.africa/about-us/"
              className="px-3"
              target="_blank"
              rel="noreferrer"
            >
              About Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
