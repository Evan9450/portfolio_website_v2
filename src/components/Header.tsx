"use client";

import { Github, Linkedin, Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
  ];

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: "https://github.com/yourusername" },
    { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Mail className="h-4 w-4" />, href: "mailto:evan9450@email.com" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl"
        >
          <span className="text-primary">Liang Shi</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="hover:bg-transparent hover:text-red-500"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="hover:bg-transparent hover:text-red-500" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] border-0">
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="hover:bg-transparent hover:text-red-500"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}

              {/* Social Links */}
              <div className="mt-8 pt-4 flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="ghost" size="icon" className="hover:bg-transparent hover:text-red-500">
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
