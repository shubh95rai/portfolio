
export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Bootstrap",
    "Auth.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Rest APIs",
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-4 py-20"
    >
    
        <div className="max-w-5xl">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>

          <div className="p- rounded-xl border border-white/10">
            <div className="rounded-xl p-10">
              <h3 className="mb-4 text-xl font-bold">🖥️ Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="text- cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-blue-500"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:grid-cols- mt-8 grid grid-cols-1 gap-6">
            <div className="rounded-xl border border-white/10 p-10">
              <h3 className="mb-4 text-xl font-bold">🏫 Education</h3>
              <ul className="list-inside list-disc text-gray-300">
                <li>
                  <strong>B.E. in Electrical</strong> — Lakshmi Narain College
                  of Technology, Bhopal (2013 - 2017)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 p-10">
              <h3 className="mb-4 text-xl font-bold">💼 Work Experience</h3>

              <ul className="list-inside list-disc space-y-4 text-gray-300">
                <li>
                  <strong>Junior Electrical Engineer</strong> — LN Malviya Infra
                  Pvt. Ltd, Bhopal (2022 - 2023)
                </li>
                <li>
                  <strong>Electrical Maintenance Engineer</strong> — Hindustan
                  Electro Graphites Ltd, Mandideep (2018 - 2020)
                </li>
                <li>
                  <strong>Electrical Apprenticeship </strong> — Hindustan
                  Electro Graphites Ltd, Mandideep (2017 - 2018)
                </li>
              </ul>
            </div>
          </div>
        </div>
      
    </section>
  );
}
