import SkillLevelStars from "../SkillLevelStars/SkillLevelStars";
import { Competence } from "../Сompetencies.types";
import Image from "next/image";

interface СompetenceCardProps {
  competence: Competence;
}
const СompetenceCard = ({ competence }: СompetenceCardProps) => {
  return (
    <section className="px-5 py-4 border border-gray-300 rounded-xl w-full">
      <header className="flex flex-row gap-2 mb-2">
        <Image
          src={competence.icon}
          width={24}
          height={24}
          alt={"Competence icon"}
        />
        <h3 className="text-lg font-extrabold">{competence.title}</h3>
      </header>
      <article className="border-l-2 border-gray-300 pl-3">
        <li className="list-none">
          {competence.skills.map((skill, index) => (
            <ul key={index}>
              <section className="flex flex-row justify-between">
                <text className="text-base font-extralight">{skill.name}</text>
                <SkillLevelStars level={skill.level} />
              </section>
            </ul>
          ))}
        </li>
      </article>
    </section>
  );
};

export default СompetenceCard;
