import { competencies } from "./Competencies.const";
import СompetenceCard from "./СompetenceCard/СompetenceCard";
const Competencies = () => {
  return (
    <section className="flex flex-row gap-11 self-center w-full">
      {competencies.map((competence, index) => (
        <СompetenceCard competence={competence} key={index} />
      ))}
    </section>
  );
};

export default Competencies;
