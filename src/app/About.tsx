import React from "react";
import ScrollAnimationWrapper from "@b/components/ui/ScrollAnimationWrapper";
import { calculateExperience } from "@b/utilities/calculateExperience";
import { CharminarIcon } from "@b/_icons";

function About() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <CharminarIcon size={"250px"} />
      </div>
      <ScrollAnimationWrapper
        element={"h1"}
        className="text-center mb-5 text-4xl font-bold"
        animationClass="fadeInUp">
        I live in Hyderabad City,
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        element={"h1"}
        className="text-center mb-5 text-2xl font-bold"
        animationClass="fadeInUp">
        where I design my world,
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        element={"h1"}
        className="text-center mb-5 text-2xl font-bold"
        animationClass="fadeInUp">
        {" "}
        My journey into the realm of software engineering
        <br /> kicked off {calculateExperience("November 2020")}.
      </ScrollAnimationWrapper>
    </div>
  );
}

export default About;
