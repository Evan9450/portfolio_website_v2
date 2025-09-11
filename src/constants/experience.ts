export interface WorkExperience {
  title: string;
  company: string;
  companyLink: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
}

export const experienceData: WorkExperience[] = [
    {
      period: "2022 — 2025",
      title: "Software Engineer",
      company: "Soniq",
      companyLink: "https://soniq.com",
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL","python","AWS","Docker","Git","CI/CD","WordPress","Next.js","Tailwind CSS","Amplify"],
      responsibilities: [
        "Developed and maintained Next.js applications with optimized performance and UI/UX best practices",
        "Built responsive, performant, and accessible UI components with Tailwind CSS",
        "Developed and maintained multiple Python-based modules for internal and external clients, customizing existing solutions and creating new ones to enhance operational efficiency and client satisfaction",
        "Built Amplify applications utilizing AWS technologies such as S3, EC2, Lambda with SQL databases (NoSQL,MySQL, PostgreSQL)",
        "Built commercial website for the company using WordPress"
      ]
    },
    {
      period: "2021 — 2022",
      title: "Frontend developer",
      company: "Outz",
      companyLink: "https://outz.com.au/",
      technologies: ["React", "React Hooks", "FastAPI", "Bootstrap"],
      responsibilities: [
        "Developed a React-based management system with Hooks and Bootstrap, improving dashboard operations and product oversight",
        "Collaborated with a compact development team to design and implement key system functionalities, enhancing admin and user interfaces",
        "Optimized the company website with responsive design and intuitive navigation in partnership with UI designers",
        "Developed a mobile-based ordering platform with a responsive interface, integrated payments, and real-time order tracking"
      ]
    },
    {
      period: "2021  — 2022",
      title: "Frontend developer",
      company: "Freelancer",
      companyLink: "",
      technologies: ["HTML", "CSS", "Sass", "JavaScript", "React"],
      responsibilities: [
        "Independently developed a feature-rich forum module using React and related technologies, supporting posting, replying, liking, and other interactive features",
        "Engineered a robust QA section capable of displaying an array of questions with dynamic graph visualizations in React, triggered by specific user queries to improve informational accessibility and user experience",
      ]
    },
    {
      period: "2020 — 2021",
      title: "Junior Frontend developer",
      company: "Cyberate",
      companyLink: "https://www.cyberate.com.au/",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","WordPress","React","Tailwind CSS","Git","CI/CD","AWS","Docker"],
      responsibilities: [
        "Played a key role in a team that integrated RESTful APIs using Node.js and managed application state with Redux, which significantly improved the responsiveness and performance of web applications",
        "Employed Git extensively for source code management, consistently implementing best practices for version control which facilitated smooth development cycles and collaboration by regularly syncing code to GitHub and GitLab repositories",
      ]
    }
  ];