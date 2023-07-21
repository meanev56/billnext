import React from "react";
import logo from "../../assets/images/sa-logo.png";
import moment from "moment";
import he from "he";
import Image from "next/image";
// import Link from "next/link";

export default function Footer({ recentNews }) {
  const handleRedirect = () => {
    window.location.href = "/"; // Replace '/' with the desired homepage URL
  };

  return (
    <footer className="bg-black-black py-8">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between h-16 hr-rule">
          <div className="flex items-center">
            <div
              className="flex items-center"
              onClick={handleRedirect}
              style={{ cursor: "pointer" }}
            >
              <Image src={logo} alt="billionaire kenya" className="logo-now" />
            </div>
          </div>
          <div className="flex items-center hidden md:flex footer-column-one">
            <p onClick={handleRedirect} className="text-white px-3">
              Home
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/north-africa/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                North Africa
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/horn-of-africa/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                Horn Of Africa
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/east-africa/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                East Africa
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/west-central-africa/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                West & Central Africa
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/southern-africa/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                Southern Africa
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/latest-news/hot-news/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                Latest
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/category/latest-news/exclusive/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                Exclusive
              </a>
            </p>
            <p>
              <a
                href="https://billionaires.africa/about-us/"
                className="text-white px-3"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
            </p>
          </div>

          <div className="flex flex-col md:hidden footer-column-one my-4">
            <p onClick={handleRedirect} className="text-white mt-2">
              Home
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/north-africa/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                North Africa
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/horn-of-africa/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                Horn Of Africa
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/east-africa/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                East Africa
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/west-central-africa/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                West & Central Africa
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/southern-africa/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                Southern Africa
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/latest-news/hot-news/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                Latest
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/category/latest-news/exclusive/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                Exclusive
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://billionaires.africa/about-us/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 pt-8 sm:px-6 lg:px-8 footer-column">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pb-8 gap-8 hr-rule-one">
          <div>
            <h1 className="mb-4 different-h1">About Us</h1>
            <h2 className="mb-4">
              The world's premier source of news on Africa's billionaires and
              UHNWIs.
            </h2>
            <div className="flex">
              <a
                href="https://web.facebook.com/Billionaires.Africa?_rdc=1&_rdr"
                className="tdm-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/billionaires.africa/"
                className="tdm-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/billionaires-africa/about/"
                className="tdm-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/NineZeroClub"
                className="tdm-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCjqaHRnRz3N5gUk2H2hQI-A"
                className="tdm-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h1>Company</h1>
            <a
              href="https://billionaires.africa/about-us/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-4">About Us</p>
            </a>
            <a
              href="https://billionaires.africa/category/latest-news/hot-news/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-4">Latest News</p>
            </a>
            <a
              href="https://billionaires.africa/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-4">Privacy Policy</p>
            </a>
            <a
              href="https://billionaires.africa/termsconditions/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-4">Terms of Use</p>
            </a>
          </div>
          <div>
            <h1>Recent Stories</h1>
            {recentNews.slice(0, 3).map((news, index) => (
              <div key={index}>
                <a href={news.link} target="_blank" rel="noreferrer">
                  <h3 className="mt-4">
                    {he.decode(news?.title?.rendered || "")}
                  </h3>
                  <div className="mt-2 flex items-center">
                    <h4 className="mr-2">HOT NEWS</h4>
                    <h5>{moment(news.modified).format("MMMM Do, YYYY")}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div>
            <h1>Subscribe</h1>
            <input className="mt-6" placeholder="Your email address" />
            <button className="mt-6">Sign up</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 this-p">
        <p>
          © {new Date().getFullYear()} Billionaires Nigeria. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
