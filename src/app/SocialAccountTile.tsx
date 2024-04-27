import {
  InstagramColoredIcon,
  LinkedInColoredIcon,
  TwitterXIcon,
} from "@b/_icons";
import React from "react";

function SocialAccountTile() {
  return (
    <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-[235px] w-full  rounded-2xl hover:duration-700 duration-700">
      <div className="w-full h-72 bg-lime-400 text-center pt-[80px] font-black text-gray-600 text-3xl">
        Socials
      </div>
      <div className="absolute bg-gray-50 -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <p className="text-black font-bold">Follow me on</p>
        <div className="flex gap-6 mt-3">
          <a
            href="https://www.instagram.com/balaji.udy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition cursor-pointer ease-in-out duration-300">
            <InstagramColoredIcon size={"30px"} />
          </a>
          <a
            href="https://in.linkedin.com/in/balaji-udayagiri-228747243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition cursor-pointer ease-in-out duration-300">
            <LinkedInColoredIcon size={"30px"} />
          </a>
          <a
            href="https://www.twitter.com/balaji_udy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition cursor-pointer ease-in-out duration-300">
            <TwitterXIcon size={"30px"} className="text-black" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialAccountTile;
