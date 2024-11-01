const Header = () => {
  return (
    <header className="flex py-4 px-4 sm:px-10 min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center flex-start gap-5 w-full">
        <div className="border-gray-300 px-3">
          <a
            href="/about"
            className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          >
            обо мне
          </a>
        </div>
        <div className=" border-gray-300 px-3">
          <a
            href="/projects"
            className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          >
            опыт
          </a>
        </div>
        <div className=" border-gray-300 px-3">
          <a
            href="/projects"
            className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          >
            проекты
          </a>
        </div>
        <div className=" border-gray-300 px-3">
          <a
            href="/contacts"
            className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          >
            контакты
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
