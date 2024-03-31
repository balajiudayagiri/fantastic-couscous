import {
  InstagramColoredIcon,
  LinkedInColoredIcon,
  TwitterXIcon,
} from "@b/_icons";
import { Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";
import CopyMail from "./CopyMail";

function Contact() {
  return (
    <div className=" xl:px-36 lg:px-16 md:px-8 sm:px-5 px-4 py-2 pt-24 flex flex-col items-center">
      <h1 className="md:text-8xl sm:text-6xl text-5xl font-extrabold leading-tight mb-10 ">
        Contact Me
      </h1>
      <CopyMail />
      <div className="flex gap-5">
        <a
          href="https://www.instagram.com/balaji.udy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition cursor-pointer ease-in-out duration-300">
          <InstagramColoredIcon size={"50px"} />
        </a>
        <a
          href="https://in.linkedin.com/in/balaji-udayagiri-228747243"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition cursor-pointer ease-in-out duration-300">
          <LinkedInColoredIcon size={"50px"} />
        </a>
        <a
          href="https://www.twitter.com/balaji_udy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition cursor-pointer ease-in-out duration-300">
          <TwitterXIcon size={"50px"} className="text-accent-foreground" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
