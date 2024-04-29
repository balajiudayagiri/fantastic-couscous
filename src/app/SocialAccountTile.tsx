import {
  InstagramColoredIcon,
  LinkedInColoredIcon,
  TwitterXIcon,
} from "@b/_icons";
import React from "react";

function SocialAccountTile() {
  return (
    <div className="cursor-pointer h-[inherit] w-full rounded-2xl hover:duration-700 duration-700 flex items-center px-6 py-2">
      <div className="text-center font-black pr-7">Follow me on</div>
      <div className="flex gap-2">
        <a
          href="https://www.instagram.com/balaji.udy"
          className="p-2 flex justify-center items-center overflow-hidden transition duration-300 transform rounded-xl border-2 border-solid hover:border-[#9639a5]/60 hover:bg-[#9639a5]/20 border-transparent">
          <InstagramColoredIcon size={"30px"} />
        </a>
        <a
          href="https://in.linkedin.com/in/balaji-udayagiri-228747243"
          className="p-2 flex justify-center items-center overflow-hidden transition duration-300 transform rounded-xl border-2 border-solid hover:border-[#0b66c2]/60 hover:bg-[#0b66c2]/20 border-transparent">
          <LinkedInColoredIcon size={"30px"} />
        </a>
        <a
          href="https://www.twitter.com/balaji_udy"
          className="p-2 flex justify-center items-center overflow-hidden transition duration-300 transform rounded-xl border-2 border-solid hover:border-foreground/60 hover:bg-foreground/20 border-transparent">
          <TwitterXIcon size={"30px"} className="" />
        </a>
      </div>
    </div>
  );
}

export default SocialAccountTile;
