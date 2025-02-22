export type Blog = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  platform: "Medium" | "LinkedIn";
  link: string;
  topics: string[];
};

export const blogs: Blog[] = [
  {
    title: "Enhancing Performance with Web Workers in Next.js and React",
    description:
      "Learn how to leverage Web Workers for improved performance in React applications. Discover techniques for managing resource-intensive tasks without compromising user experience.",
    date: "Jan 15, 2025",
    readTime: "7 min read",
    platform: "Medium",
    link: "https://medium.com/@balu.udy/enhancing-performance-with-web-workers-in-next-js-and-react-bc62f50a9d53",
    topics: ["Next.js", "React", "Performance", "Web Workers"],
  },
  {
    title: "Think and Grow Rich: Lessons on Success, Wealth, and Mindset",
    description:
      "Explore timeless principles from Napoleon Hill's classic that have helped millions worldwide unlock their potential and achieve their dreams.",
    date: "November 27, 2024",
    readTime: "5 min read",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/balaji-udayagiri-228747243_think-and-grow-rich-by-napoleon-hill-activity-7267255936786804736-inow",
    topics: ["Mindset", "Success", "Personal Development"],
  },
  {
    title: "Mastering Aspect Ratio in CSS & Tailwind CSS",
    description:
      "Learn how to maintain perfect proportions for images, videos, and other elements across different screen sizes using modern CSS techniques.",
    date: "November 27, 2024",
    readTime: "4 min read",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/balaji-udayagiri-228747243_aspect-ratio-demystified-creating-flexible-activity-7267249908854743040-9Ao4",
    topics: ["CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Key Things Every Next.js Developer Should Know in 2024",
    description:
      "Essential concepts and best practices for Next.js developers working with App Router and TypeScript to build efficient and scalable applications.",
    date: "November 27, 2024",
    readTime: "6 min read",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/balaji-udayagiri-228747243_key-things-every-nextjs-developer-should-activity-7267248445210419200-A1M8",
    topics: ["Next.js", "TypeScript", "App Router"],
  },
  {
    title:
      "Mastering Jira: A Comprehensive Guide for Educators and Scrum Masters",
    description:
      "A detailed guide on effectively using Jira for project management, perfect for educators and Scrum Masters leading Agile teams.",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    platform: "Medium",
    link: "https://medium.com/@balu.udy/mastering-jira-a-comprehensive-guide-for-educators-and-scrum-masters-99c05ebcdeca",
    topics: ["Jira", "Agile", "Project Management"],
  },
  {
    title: "Creating a Reusable Web Component with Templates and Shadow DOM",
    description:
      "Learn how to build a custom <element-details> web component using the Shadow DOM and Template API for encapsulated, reusable UI elements.",
    date: "February 22, 2025",
    readTime: "6 min",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/pulse/creating-reusable-web-component-templates-shadow-dom-balaji-udayagiri-v1mdc",
    topics: [
      "Web Components",
      "Shadow DOM",
      "HTML Templates",
      "Custom Elements",
      "JavaScript",
      "Front-End Development",
    ],
  },
];
