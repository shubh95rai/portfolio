import AnimatedComponent from "../AnimatedComponent";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center px-4 py-20"
    >
      <AnimatedComponent>
        <div className="max-w-5xl">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Project 1 */}

            <div className="flex flex-col justify-between rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <div>
                <h3 className="mb-2 text-xl font-bold">Instagram Clone</h3>
                <p className="mb-4 text-gray-400">
                  Features user authentication, post creation, editing,
                  deletion, likes, comments, bookmark and follow for a full
                  social media experience.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "MongoDB",
                    "Prisma",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "Auth.js",
                    "Zod",
                    "React Hook Form",
                  ].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-500"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="https://instagram-clone-nextjs-five.vercel.app/"
                  target="_blank"
                  className="text-blue-500 transition-all hover:scale-90 hover:text-blue-400"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 2 */}

            <div className="flex flex-col justify-between rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <div>
                <h3 className="mb-2 text-xl font-bold">AI Image Generator</h3>
                <p className="mb-4 text-gray-400">
                  Generate unique images from text prompts, download them and
                  save them to a database with a seamless user experience.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "MongoDB",
                    "Prisma",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "Auth.js",
                    "Zod",
                    "React Hook Form",
                    "Framer Motion",
                  ].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-500"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="https://ai-image-generator-nextjs.vercel.app/"
                  target="_blank"
                  className="text-blue-500 transition-all hover:scale-90 hover:text-blue-400"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 3 */}

            <div className="flex flex-col justify-between rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <div>
                <h3 className="mb-2 text-xl font-bold">Quiz App</h3>
                <p className="mb-4 text-gray-400">
                  Features user authentication, a 30-second timer per question,
                  and secure result storage in database. Provides a smooth and
                  interactive quiz experience.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "MongoDB",
                    "Prisma",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "Auth.js",
                  ].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-500"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="https://quiz-app-nextjs-two.vercel.app/"
                  target="_blank"
                  className="text-blue-500 transition-all hover:scale-90 hover:text-blue-400"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 4 */}

            <div className="flex flex-col justify-between rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <div>
                <h3 className="mb-2 text-xl font-bold">E-Commerce Store</h3>
                <p className="mb-4 text-gray-400">
                  Utilizes an external API to fetch and display product data.
                  Implements Redux Toolkit for centralized state management and
                  React Router for smooth multi-page navigation across product
                  listings and cart.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Redux Toolkit",
                    "Tailwind CSS",
                    "React Router",
                    "Rest API",
                  ].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-500"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="https://e-commerce-rtk-95.netlify.app/"
                  target="_blank"
                  className="text-blue-500 transition-all hover:scale-90 hover:text-blue-400"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 5 */}

            <div className="flex flex-col justify-between rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <div>
                <h3 className="mb-2 text-xl font-bold">Todo List</h3>
                <p className="mb-4 text-gray-400">
                  Enables users to Create, Read, Update, and Delete todo items,
                  providing comprehensive task management capabilities. Utilizes
                  local storage to save and retrieve todo items, ensuring data
                  persistence across sessions.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {["React.js", "Tailwind CSS"].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-500"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="https://todo-list-reactjs-95.vercel.app/"
                  target="_blank"
                  className="text-blue-500 transition-all hover:scale-90 hover:text-blue-400"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 6 */}

            <div className="flex flex-col justify-between rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <div>
                <h3 className="mb-2 text-xl font-bold">Weather App</h3>
                <p className="mb-4 text-gray-400">
                  Integrates a weather API (OpenWeatherMap) to fetch and display
                  current weather conditions and forecasts in real time and
                  Local Storage to save the last searched city for quick access.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {["React.js", "Tailwind CSS", "Rest API"].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="cursor-default rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-500"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="https://weather-app-reactjs-95.vercel.app/"
                  target="_blank"
                  className="text-blue-500 transition-all hover:scale-90 hover:text-blue-400"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
