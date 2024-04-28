import { InfiniteMovingCards } from "@b/components/ui/infinite-moving-cards";
import React from "react";

const testimonials = [
  {
    quote: "",
    name: "",
    image: "/images/cat.JPEG",
  },
  {
    quote: "",
    name: "",
    image: "/images/charminarfront.JPEG",
  },
  {
    quote: "",
    name: "",
    image: "/images/charminarside.JPEG",
  },
  {
    quote: "",
    name: "",
    image: "/images/fish.JPEG",
  },
  {
    quote: "",
    name: "",
    image: "/images/office.jpg",
  },
  {
    quote: "",
    name: "",
    image: "/images/rocktemple.JPG",
  },
  {
    quote: "",
    name: "",
    image: "/images/street.JPEG",
  },
  {
    quote: "",
    name: "",
    image: "/images/sunset.JPG",
  },
  {
    quote: "",
    name: "",
    image: "/images/templetree.JPG",
  },
];

function Galary() {
  return (
    <div className="w-[100vw]">
      <h1 className="font-black text-center text-6xl mb-10">Galary</h1>
      <InfiniteMovingCards
        pauseOnHover={false}
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Galary;
