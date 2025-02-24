export default function Navbar({ menuOpen, setMenuOpen }) {
  // useEffect(() => {
  //   document.body.style.overflow = menuOpen ? "hidden" : "";
  // }, [menuOpen]);
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.5)] shadow-lg backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#home" className="text-xl font-bold text-white">
          Portfolio
        </a>

        <div
          className="flex size-7 cursor-pointer items-center justify-center md:hidden"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        >
          &#9776;
        </div>

        <div className="hidden items-center gap-8 *:text-gray-300 *:transition-colors *:hover:text-white md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
