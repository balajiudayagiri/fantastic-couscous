import React from "react";
import AboutMeTile from "@broot/AboutMeTile";
import MyMusicTile from "@broot/MyMusicTile";
import SocialAccountTile from "@broot/SocialAccountTile";
import NodeModuleTile from "@b/app/NodeModule";
import ToolsTile from "@broot//ToolsTile";
import ScrollAnimationWrapper from "@b/components/ui/ScrollAnimationWrapper";

function TilesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ScrollAnimationWrapper
        element={"div"}
        animationClass="slideRight"
        className="md:col-span-2 col-span-1  p-4 shadow rounded-xl bg-muted transform transition duration-300 ease-in-out sm:hover:scale-105">
        <AboutMeTile />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        element={"div"}
        animationClass="slideLeft"
        className="shadow rounded-xl row-span-2 overflow-hidden transform transition duration-300 ease-in-out sm:hover:scale-105 h-fit">
        <MyMusicTile />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        element={"div"}
        animationClass="slideRight"
        className="bg-muted overflow-hidden shadow rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105 row-span-2">
        <NodeModuleTile />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        element={"div"}
        animationClass="slideUp"
        className="bg-muted rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105  row-span-2">
        <ToolsTile />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        element={"div"}
        animationClass="slideLeft"
        className="bg-muted rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105">
        <SocialAccountTile />
      </ScrollAnimationWrapper>
    </div>
  );
}

export default TilesSection;
