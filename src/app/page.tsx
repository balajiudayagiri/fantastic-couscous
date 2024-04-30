import { SoftwareEngineericon } from "@b/_icons";
import ScrollAnimationWrapper from "@b/components/ui/ScrollAnimationWrapper";
import Galary from "@broot//Galary";

import TilesSection from "@broot/TilesSection";
export default function Home() {
  return (
    <div className="scroll-behavior-smooth scroll-smooth snap-y snap-mandatory snap-center overflow-y-scroll h-screen transition-transform duration-300 ease-in-out">
      <main className="lg:snap-start text-accent-foreground xl:mx-36 lg:mx-16 md:mx-8 sm:mx-5 mx-4 sm:h-dvh h-[100vh] flex flex-col justify-center">
        <ScrollAnimationWrapper element={"div"} animationClass="slideUp">
          <h1 className="font-bold text-2xl text-yellow-400">I&apos;m a</h1>
          <SoftwareEngineericon className="w-full" />
        </ScrollAnimationWrapper>
      </main>
      <section className="lg:snap-start container mx-auto p-4 sm:h-dvh flex items-center">
        <TilesSection />
      </section>
      <section className="lg:snap-start container mx-auto p-4 sm:h-dvh flex items-center w-full justify-center">
        <Galary />
      </section>
    </div>
  );
}
