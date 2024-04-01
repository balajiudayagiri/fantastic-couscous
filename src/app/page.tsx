import {
  InstagramColoredIcon,
  LinkedInColoredIcon,
  TwitterXIcon,
} from "@b/_icons";

export default function Home() {
  return (
    <main className="text-accent-foreground xl:mx-36 lg:mx-16 md:mx-8 sm:mx-5 mx-4 h-[70vh] flex flex-col justify-center">
      <h1 className={"md:text-7xl sm:text-6xl text-4xl font-extrabold mb-10"}>
        I'm <br />
        Balaji Udayagiri
      </h1>
      <p className={`text-justify text-[.9rem] leading-5`}>
        Welcome to my digital playground! I'm a{" "}
        <span className="dark:text-cyan-500 text-cyan-600 font-bold text-xl">
          Software Engineer
        </span>{" "}
        passionate about crafting awesome digital experiences.
      </p>
      <p className={`text-justify text-[.9rem] leading-5`}>
        With expertise in React.js, HTML5, CSS3, MUI, Mantine UI, and more, I
        transform ideas into beautiful, functional websites and applications.
        Let's turn your vision into reality!
      </p>
      <p className={`text-justify text-[.9rem] leading-5`}>
        I'm all about growth and creativity. Join me on this journey of endless
        learning and innovation. Together, we'll build something amazing.
      </p>
      <p className="text-lg mt-6 font-semibold dark:text-cyan-500 text-cyan-600">
        #SoftwareEngineering #ProductDevelopment
      </p>
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
          <TwitterXIcon size={"30px"} className="text-accent-foreground" />
        </a>
      </div>
    </main>
  );
}
