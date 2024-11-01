import Image from "next/image";
import avatar from "../../assets/images/avatar.png";
const AboutMe = () => {
  return (
    <section className="flex flex-row gap-16 items-center px-8">
      <Image src={avatar} width={180} height={180} alt={"avatar"} />
      <section className="flex flex-col gap-6">
        <section className="flex flex-col gap-8">
          <h1 className="text-3xl">Аида Галимова</h1>
          <text className="text-xl">
            Я - фронтенд разработчик, специализирующийся на React. Умею работать
            как самостоятельно, так и в команде. Всегда стремлюсь повысить свою
            квалификации и изучать новые технологии.
          </text>
        </section>
        <section className="flex flex-row gap-4">
          <a
            href="https://t.me/i1obi1"
            className="font-semibold hover:text-[#007bff]"
          >
            TELEGRAM
          </a>
          <a
            href="https://github.com/aidagalimova"
            className="font-semibold hover:text-[#007bff]"
          >
            GITHUB
          </a>
          <a
            href="https://kazan.hh.ru/resume/98801908ff094f70820039ed1f7843434a676e"
            className="font-semibold hover:text-[#007bff]"
          >
            HH
          </a>
        </section>
      </section>
    </section>
  );
};
export default AboutMe;
