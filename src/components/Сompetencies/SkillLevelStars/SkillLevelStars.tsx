import { SkillLevel } from "../Сompetencies.types";
import star from "../../../assets/images/star.svg";
import Image from "next/image";

interface SkillLevelStarsProps {
  level: SkillLevel;
}
const SkillLevelStars = ({ level }: SkillLevelStarsProps) => {
  return (
    <section className="flex flex-row gap-1">
      {[...Array(level)].map((_, index) => (
        <Image key={index} src={star} width={14} height={14} alt={"star"} />
      ))}
    </section>
  );
};
export default SkillLevelStars;
