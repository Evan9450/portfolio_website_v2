export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  // githubLink: string;
  category: "frontend" | "backend" | "fullstack";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Chinese Museum Website",
    description:
      "A full-stack web app with AWS Amplify, handling front-end UI and core features, ensuring fast development and scalable, stable performance",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["React", "Next.js", "Figma", "Amplify", "AWS"],
    liveLink: "https://main.d39wab70zyzqyj.amplifyapp.com/",
    // githubLink: "https://github.com/username/ecommerce",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Brighton Grammar Website",
    description:
      "A frontend Website for Brighton Grammar school, providing information about the Alumni and their achievements",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["Next.js", "EC2", "TailwindCSS", "Amplify"],
    liveLink: "https://main.d3ikgngeoc22hn.amplifyapp.com/display/",
    // githubLink: "https://github.com/username/taskapp",
    category: "frontend",
  },
  {
    id: 3,
    title: "PixioX",
    description:
      "A powerful iOS photo management app that helps you organize, browse, and rediscover your memories",
    image:
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80",
    technologies: ["Swift", "Xcode", "Next.js", "vercel"],
    liveLink: "https://www.pixiox.co/",
    // githubLink: "https://github.com/username/weatherapi",
    category: "fullstack",
  },
  {
    id: 4,
    title: "TalkOz",
    description:
      "A 24/7 AI voice assistant that helps you get the information you need, when you need it",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "ShadcnUI", "Clerk", "RESTAPI"],
    liveLink: "https://talkoz.ai/",
    // githubLink: "https://github.com/username/portfolio",
    category: "frontend",
  },
]; 