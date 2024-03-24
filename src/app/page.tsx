import {
  InstagramColoredIcon,
  LinkedInColoredIcon,
  TwitterXIcon,
} from "@b/_icons";

export default function Home() {
  return (
    <main className="text-accent-foreground xl:mx-36 lg:mx-16 md:mx-8 sm:mx-5 mx-4 h-[70vh] flex flex-col justify-center">
      <h1 className={"md:text-7xl sm:text-6xl text-4xl font-extrabold mb-10 "}>
        I&apos;m <br />
        Balaji Udayagiri
      </h1>
      <p className={`text-justify text-[.9rem] leading-5`}>
        Passionate Software Engineer 🚀 | Product Development 🔧
      </p>
      <p className={`text-justify text-[.9rem] leading-5`}>
        Specializing in React.js, HTML5 & CSS3, MUI, Mantine Ui, react-router,
        Redux toolkit, nested CSS, I&apos;m dedicated to ensuring seamless
        performance, scalability, and user delight.💻
      </p>
      <p className={`text-justify text-[.9rem] leading-5`}>
        My passion lies in utilizing existing skills while eagerly embracing new
        ones, within a dynamic and creative work environment. I believe that
        learning is an unending process, and I relish every opportunity to grow,
        both personally and professionally. 🌱
      </p>
      <p className={"text-lg mt-6 font-semibold"}>
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
