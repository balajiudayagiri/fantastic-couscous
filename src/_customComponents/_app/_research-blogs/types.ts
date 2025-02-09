export type ResearchCategory =
  | "Frontend Development"
  | "Backend Development"
  | "AI Integration"
  | "Performance Optimization"
  | "Architecture"
  | "Developer Experience"
  | "UI/UX"
  | "Testing"
  | "DevOps";

export type TechStack = {
  name: string;
  version?: string;
  description: string;
  link: string;
};

export type ResearchBlog = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: ResearchCategory;
  readTime: string;
  techStacks: TechStack[];
  content: {
    summary: string;
    keyPoints: string[];
    codeExamples?: {
      title: string;
      code: string;
      language: string;
    }[];
  };
  references: {
    title: string;
    url: string;
  }[];
  relatedTopics: string[];
  status: "draft" | "published" | "archived";
  metrics?: {
    views: number;
    likes: number;
    shares: number;
  };
};
