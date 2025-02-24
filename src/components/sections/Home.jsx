import AnimatedComponent from "../AnimatedComponent";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 pt-16"
    >
      <AnimatedComponent>
        <div className="text-center">
          <h1 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm Shubham Rai
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
            Aspiring frontend developer with a strong passion for building
            user-friendly web applications. Eager to learn, grow, and contribute
            to real-world projects while continuously improving coding skills.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
