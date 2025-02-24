export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 z-40 flex w-full flex-col items-center justify-center bg-[rgba(10,10,10,0.5)] backdrop-blur-md transition-all duration-300 ease-in-out ${menuOpen ? "pointer-events-auto h-screen opacity-100" : "pointer-events-none h-0 opacity-0"}`}
    >
      <button
        onClick={() => {
          setMenuOpen(false);
        }}
        className="absolute top-[14px] right-[21px] cursor-pointer text-3xl focus:outline-none"
        aria-label="close menu"
      >
        &times;
      </button>

      <div
        className={`flex flex-col items-center gap-8 text-2xl font-semibold *:my-4 *:text-gray-300 *:transition-all *:duration-300 *:hover:text-white ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
      >
        <a
          href="#home"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
