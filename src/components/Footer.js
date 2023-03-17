import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGithubAlt, FaHackerrank } from "react-icons/fa";
import { GiRamProfile } from "react-icons/gi";

const Footer = () => {
  return (
    <div className=" w-full py-5 min-h-[30vh]">
      <div className="flex flex-col">
        <h1 className=" text-xl mt-8">Created By Aditya Kumar</h1>
        <div className="">
          <ul className=" flex flex-row justify-center text-2xl mt-4">
            <a
              target="_blank"
              href="https://adityakr1403.github.io/"
              className="px-5 text-3xl text-violet-400"
            >
              <GiRamProfile className="" />
            </a>
            <a
              target="_blank"
              href="https://github.com/adityakr1403"
              className="px-5 text-3xl text-violet-900"
            >
              <FaGithubAlt className="" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aditya-kumar-62595b257/"
              className="px-5 text-3xl text-blue-400"
            >
              <AiFillLinkedin className="" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="px-5 text-3xl text-blue-700"
            >
              <AiFillFacebook className="" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="px-5 text-3xl text-rose-700"
            >
              <AiFillInstagram className="" />
            </a>
            <a
              target="_blank"
              href="https://www.hackerrank.com/adityakr1403"
              className="px-5 text-3xl text-green-700"
            >
              <FaHackerrank className="" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
