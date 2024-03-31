"use client";
import { Mail } from "lucide-react";
import React from "react";

function CopyMail() {
  const handleCopyEmail = () => {
    const email = "balaji.udayagiri7@outlook.com"; // Your email address
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };
  return (
    <div className="flex gap-5 items-center md:hover:scale-125 transition cursor-pointer ease-in-out duration-300 mb-11">
      <Mail size={"35px"} />
      <h3
        className="hover:underline cursor-copy"
        onClick={() => handleCopyEmail()}>
        balaji.udayagiri7@outlook.com
      </h3>
    </div>
  );
}

export default CopyMail;
