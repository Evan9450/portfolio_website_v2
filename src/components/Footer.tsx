import { Button } from "@/components/ui/button";
import React from "react";
import { siteConfig } from "@/constants";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-end items-center">
          <div className="mb-4 md:mb-0">
                      <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          </div>
          {/* <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#">Privacy Policy</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#">Terms of Service</a>
            </Button>
          </div> */}
        </div>
      </div>
    </footer>
  );
} 