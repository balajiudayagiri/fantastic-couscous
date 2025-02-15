import { Documentation } from "@b/_customComponents/_app/_docs/Documentation";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "",
};

function page() {
  return <Documentation />;
}

export default page;
