import { Competence } from "./Сompetencies.types";
import webIcon from "../../assets/images/web.svg";
import devopsIcon from "../../assets/images/devops.svg";
import otherIcon from "../../assets/images/other.svg";

export const competencies: Competence[] = [
  {
    title: "Web-технологии",
    icon: webIcon,
    skills: [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React.js", level: 4 },
      { name: "Redux", level: 4 },
      { name: "Styled Components", level: 5 },
      { name: "SASS", level: 4 },
      { name: "REST", level: 5 },
    ],
  },
  {
    title: "DevOps-технологии",
    icon: devopsIcon,
    skills: [
      { name: "GIT (GitHub, GitLab, Bitbucket)", level: 4 },
      { name: "Webpack", level: 3 },
      { name: "Docker", level: 3 },
    ],
  },
  {
    title: "Другое",
    icon: otherIcon,
    skills: [
      { name: "Figma", level: 4 },
      { name: "Jira", level: 5 },
      { name: "Confluence", level: 5 },
      { name: "Redmine", level: 5 },
    ],
  },
];
