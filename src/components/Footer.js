import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import logoWhiteImage from "../images/logo.png";

import iconDiscordImage from "../images/icon_discord.png";
import iconFacebookImage from "../images/icon_facebook.png";
import iconGithubImage from "../images/icon_github.png";
import iconRedditImage from "../images/icon_reddit.png";
import iconTelegramImage from "../images/icon_telegram.png";
import iconTwitterImage from "../images/icon_twitter.png";

export const Footer = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <footer className="bg-blue-1000">
      {[
        "/about",
        "/about/",
        "/mask-website/about",
        "/mask-website/about/",
        "/download",
        "/download/",
        "/mask-website/download",
        "/mask-website/download/",
        "/faq",
        "/faq/",
        "/mask-website/faq",
        "/mask-website/faq/",
      ].includes(path) ? null : (
        <div className="md:flex md:justify-between max-sm:flex-col max-sm:justify-center md:items-center md:max-w-8xl md:w-10/12 w-10/12 max-sm:w-full mx-auto max-sm:px-4 px-10 p-10 pb-7 bg-blue-100 relative -top-20 max-sm:top-0 max-sm:static flex-wrap box-shadow-news-letter-out">
          <div className="mr-7 mb-7 max-sm:w-full">
            <p className="text-3xl font-medium mb-4 max-sm:text-2xl max-sm:w-full max-sm:text-center text-left">
              MASK NETWORK Newsletter
            </p>
            <p className="text-lg text-gray-500 max-sm:w-full max-sm:text-center text-left">
              Follow us for more information about MASK
            </p>
          </div>
          <form
            className="md:block flex max-sm:justify-center justify-start max-sm:w-full filter drop-shadow-news-letter"
            name="subscription"
            method="post"
            target="_blank"
            rel="noreferrer"
            noValidate
            action="https://dimension.us20.list-manage.com/subscribe/post?u=bd44f8df98ab3d8daf8bbe020&amp;id=d23c8870f6"
          >
            <input
              name="EMAIL"
              className="outline-none w-96 max-sm:w-68 md:text-base text-sm max-sm:pl-2 bg-white py-4 pl-5 rounded-none"
              type="email"
              placeholder="Please input your email address"
            />
            <button
              type="submit"
              className="py-4 md:px-5 px-3 text-sm md:text-base bg-blue-600 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="md:py-24 py-5 md:max-w-8xl md:w-10/12 hg:w-11/12 w-full mx-auto max-sm:px-4 px-16 md:px-5 flex flex-wrap relative">
        <div className="md:h-footer-body py-1 md:flex md:flex-col md:justify-between md:max-w-sm min-w-280 md:w-1/4 w-full md:border-r md:border-b-0 border-b border-gray-100 border-opacity-25">
          <img alt="" src={logoWhiteImage} className="w-32 md:mb-0 mb-8" />
          <div className="pr-2">
            <p className="text-white opacity-80 text-base mb-4 md:max-w-xs w-full">
              Mask Network is developed and Maintained by Dimension.{" "}
            </p>
            <p className="text-white opacity-80 text-base md:mb-4 mb-8 md:max-w-xs w-full">
              Mask network is a free and open source software.
            </p>
            <p className="text-white text-base max-w-xs md:mb-0 mb-16">
              © 2018-2021 Mask.io
            </p>
          </div>
        </div>
        <div className="sm:h-footer-body md:w-1/2 md:max-w-2xl flex hg:pr-16 md:pl-4 md:mt-0 mt-16 max-sm:w-full max-sm:flex-wrap max-sm:mt-4">
          <div className="flex justify-center md:max-w-xss md:w-1/3 whitespace-nowrap mr-8 max-sm:mt-8">
            <div className="sm:h-footer-body py-1 flex flex-col justify-between mx-auto">
              <p className="text-2xl text-white max-sm:mb-12">About</p>
              <div>
                <a
                  href="https://dimensiondev.github.io/Maskbook-VI/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-white opacity-80 pb-10 max-sm:pb-5 block"
                >
                  Brand Guide
                </a>
                <a
                  href="mailto:info@dimension.im"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-white opacity-80 pb-10 max-sm:pb-5 block"
                >
                  Contact Us
                </a>
                <a
                  href="https://legal.mask.io/maskbook/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-white opacity-80 block"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="sm:h-footer-body py-1 flex flex-col justify-between max-w-lg md:w-2/3 whitespace-nowrap md:ml-0 ml-16 max-sm:ml-0 max-sm:mt-8">
            <p className="text-2xl text-white max-sm:mb-12">Navigate</p>
            <div className="grid grid-cols-3 md:gap-x-16 gap-x-4 gap-y-10 max-sm:gap-y-5 max-sm:gap-x-0 text-base max-xsm:text-sm">
              <a
                href="https://news.mask.io/"
                target="_blank"
                rel="noreferrer"
                className="text-white opacity-80"
              >
                News
              </a>
              <Link className="text-base text-white opacity-80" to="/faq">
                FAQs
              </Link>
              <a
                href="https://github.com/DimensionDev"
                target="_blank"
                rel="noreferrer"
                className="text-white opacity-80"
              >
                Source Code
              </a>
              <Link className="text-white opacity-80" to="/faq">
                Help
              </Link>
              <Link className="text-white opacity-80" to="/faq?type=tutorials">
                Tutorials
              </Link>
              <a
                href='https://github.com/DimensionDev/Maskbook/issues?q=is:issue+is:open+label:"Bounty:+Open"'
                target="_blank"
                rel="noreferrer"
                className="text-white opacity-80"
              >
                Bounty Program
              </a>
              <a
                href="https://www.linkedin.com/company/masknetwork/jobs/"
                target="_blank"
                rel="noreferrer"
                className="text-white opacity-80"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
        <div className="hg:h-footer-body md:h-24 py-1 flex flex-col hg:w-48 hg:ml-10 hg:mt-0 mt-8 justify-between w-full md:pb-0 pb-12 hg:absolute hg:right-0">
          <p className="text-2xl text-white">Community</p>
          <div className="grid hg:grid-cols-3 grid-cols-6 hg:gap-x-4 gap-x-2 hg:gap-y-4 hg:w-40 w-72 hg:mt-0 mt-12">
            <a
              href="https://discord.gg/4SVXvj7"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={iconDiscordImage} className="cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/masknetwork"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={iconFacebookImage} className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/DimensionDev"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={iconGithubImage} className="cursor-pointer" />
            </a>
            <a
              href="https://www.reddit.com/r/MaskNetwork/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={iconRedditImage} className="cursor-pointer" />
            </a>
            <a
              href="https://t.me/maskbook_group#telegram"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={iconTelegramImage} className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/realMaskNetwork"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={iconTwitterImage} className="cursor-pointer" />
            </a>
            <div className="opacity-0 hidden hg:flex">
              placeholder never show
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:px-0 px-5">
        <p className="w-full text-white text-center max-sm:text-left py-4 border-t border-gray-100 border-opacity-25 mx-auto">
          I thought what I'd do was, I'd pretend I was one of those deaf-mutes.
        </p>
      </div>
    </footer>
  );
};