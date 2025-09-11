import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-[80px] items-center py-8 fixed h-screen">
      <div className="mt-auto flex flex-col gap-6">
        <Button variant="ghost" size="icon" className="hover:bg-transparent" asChild>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 hover:text-red-500" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-transparent" asChild>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 hover:text-red-500" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-transparent" asChild>
          <a href={`mailto:${siteConfig.links.email}`}>
            <Mail className="h-5 w-5 hover:text-red-500" />
          </a>
        </Button>
      </div>
      <div className="mt-8 h-24 w-[1px] bg-red-500"></div>
    </aside>
  );
} 