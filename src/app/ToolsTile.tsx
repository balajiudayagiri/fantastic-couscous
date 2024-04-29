import React, { CSSProperties } from "react";
import {
  BootstrapIcon,
  Css3ColoredIcon,
  FigmaIcon,
  GithubIcon,
  GoogleConsole,
  Html5ColoredIcon,
  JavascriptColoredIcon,
  MUIIcon,
  NextjsIcon,
  OAuthIcon,
  ReactColoredIcon,
  ReactRoterColoredIcon, // Ensure correct spelling if necessary
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from "@b/_icons";

function ToolsTile() {
  const size = "40px";

  const tools = [
    {
      icon: <VSCodeIcon size={size} />,
      url: "https://code.visualstudio.com/",
      borderColor: "#1f9cf0",
    },
    {
      icon: <GithubIcon size={size} />,
      url: "https://github.com/",
      borderColor: "#000000",
    },
    {
      icon: <BootstrapIcon height={size} width={size} />,
      url: "https://getbootstrap.com/",
      borderColor: "#563d7c",
    },
    {
      icon: <Css3ColoredIcon height={size} width={size} />,
      url: "https://www.w3.org/Style/CSS/Overview.en.html",
      borderColor: "#1172b8",
    },
    {
      icon: <Html5ColoredIcon height={size} width={size} />,
      url: "https://www.w3.org/html/",
      borderColor: "#e44d27",
    },
    {
      icon: <JavascriptColoredIcon size={size} />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      borderColor: "#f7df1c",
    },
    {
      icon: <MUIIcon height={size} width={size} />,
      url: "https://mui.com/",
      borderColor: "#0281cb",
    },
    {
      icon: <OAuthIcon size={size} />,
      url: "https://oauth.net/",
      borderColor: "#000000",
    },
    {
      icon: <ReactColoredIcon height={size} width={size} />,
      url: "https://reactjs.org/",
      borderColor: "#00d8fe",
    },
    {
      icon: <ReactRoterColoredIcon height={size} width={size} />,
      url: "https://reactrouter.com/",
      borderColor: "#000000",
    },
    {
      icon: <ReduxIcon height={size} width={size} />,
      url: "https://redux.js.org/",
      borderColor: "#764abc",
    },
    {
      icon: <TailwindIcon height={size} width={size} />,
      url: "https://tailwindcss.com/",
      borderColor: "#44a8b3",
    },
    {
      icon: <TypeScriptIcon height={size} width={size} />,
      url: "https://www.typescriptlang.org/",
      borderColor: "#3078c6",
    },
    {
      icon: <FigmaIcon size={size} />,
      url: "https://www.figma.com/",
      borderColor: "#a259ff",
    },
    {
      icon: <GoogleConsole size={size} />,
      url: "https://console.developers.google.com/",
      borderColor: "#f9bc07",
    },
    {
      icon: <NextjsIcon size={size} />,
      url: "https://nextjs.org/",
      borderColor: "#000000",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="font-black pr-7">Tools and Technologies</h1>
      <div className="h-72 flex flex-wrap gap-2 justify-center content-center">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer">
            <div
              style={
                {
                  "--hover-bg": `${tool.borderColor}20`,
                  "--hover-border": `${tool.borderColor}70`,
                } as CSSProperties
              }
              className="h-16 w-16 rounded-xl border-2 border-solid border-transparent hover:border-[var(--hover-border)] hover:bg-[var(--hover-bg)] flex items-center justify-center">
              {tool.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ToolsTile;
