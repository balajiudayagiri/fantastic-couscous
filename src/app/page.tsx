import {
  InstagramColoredIcon,
  LinkedInColoredIcon,
  TwitterXIcon,
} from "@b/_icons";

import { SoftwareEngineericon } from "@b/_icons";
import AboutMeTile from "@broot/AboutMeTile";
import MyMusicTile from "@broot/MyMusicTile";
import SocialAccountTile from "@broot/SocialAccountTile";

export default function Home() {
  return (
    <div className="scroll-behavior-smooth scroll-smooth snap-y snap-mandatory snap-center overflow-y-scroll h-screen">
      <main className="md:snap-start text-accent-foreground xl:mx-36 lg:mx-16 md:mx-8 sm:mx-5 mx-4 sm:h-dvh h-[100vh] flex flex-col justify-center">
        <h1 className="font-bold text-2xl">I&apos;m a</h1>
        <SoftwareEngineericon className="w-full" />
      </main>
      <section className="md:snap-start container mx-auto p-4 h-dvh flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="md:col-span-2 col-span-1  p-4 shadow rounded-xl bg-muted transform transition duration-300 ease-in-out sm:hover:scale-105">
            <AboutMeTile />
          </div>
          <div className="shadow rounded-xl row-span-2 overflow-hidden transform transition duration-300 ease-in-out sm:hover:scale-105">
            <MyMusicTile />
          </div>
          <div className="bg-muted p-4 shadow rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105 row-span-2">
            Item 2
          </div>
          <div className="shadow rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105">
            <SocialAccountTile />
          </div>
          <div className="bg-muted p-4 shadow rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105">
            Item 5
          </div>
          <div className="bg-muted p-4 shadow rounded-xl transform transition duration-300 ease-in-out sm:hover:scale-105">
            Item 6
          </div>
        </div>
      </section>
    </div>
  );
}
