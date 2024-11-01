import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

interface Skill {
  name: string;
  level: SkillLevel;
}
export interface Competence {
  title: string;
  icon: StaticImport;
  skills: Skill[];
}
