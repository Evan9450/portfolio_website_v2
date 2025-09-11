import React from "react";

export interface Achievement {
  title: string;
  description: string;
  iconName: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "GitLab Certified Associate",
    description: "Certified by GitLab for foundational DevOps and GitLab platform skills.",
    iconName: "check-circle",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Credentialed by AWS for fundamental cloud and AWS platform knowledge.",
    iconName: "award",
  },
]; 