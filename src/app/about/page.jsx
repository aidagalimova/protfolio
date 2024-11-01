import AboutMe from "../../components/AboutMe/AboutMe";
import Сompetencies from "../../components/Сompetencies/Сompetencies";
export default function About() {
  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-black mb-8">Обо мне</h1>
      <article className="flex flex-col gap-16">
        <AboutMe />
        <Сompetencies />
      </article>
    </main>
  );
}
