import { useState } from "react";
import { motion } from "framer-motion";

/* ---------------- PROJECT DATA ---------------- */

const nodeProjects = [
  {
    name: "FitGenix AI Platform",
    desc: "AI-powered fitness platform built with MERN stack. Includes authentication, AI features, progress tracking, and cloud deployment.",
    live: "https://fitgenix-ai-platform.netlify.app",
    github: "https://github.com/rishabh-dev-tech/fitgenix-ai-platform"
  },
  {
    name: "myNoteBook",
    desc: "Secure notebook web app with login system, private notes, CRUD operations, and MongoDB backend.",
    live: "https://mynotebook-2026.netlify.app",
    github: "https://github.com/rishabh-dev-tech/myNoteBook"
  }
];

const reactProjects = [
  {
    name: "CodeLecture Hub",
    desc: "A React-based learning platform for coding lectures and structured content with a modern responsive interface.",
    live: "https://codelecture-hub.netlify.app/",
    github: ""
  }
];

/* ---------------- MAIN PAGE ---------------- */

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h1>

        {/* MAIN CATEGORY CARDS */}
        {!active && (
          <div className="grid sm:grid-cols-2 gap-8">
            <TechCard title="HTML & CSS" onClick={() => setActive("html")} />
            <TechCard title="JavaScript" onClick={() => setActive("js")} />
            <TechCard title="React" onClick={() => setActive("react")} />
            <TechCard title="Node / MERN" onClick={() => setActive("node")} />
          </div>
        )}

        {/* PLACEHOLDER SECTIONS */}
        {(active === "html" || active === "js") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-4 capitalize">
              {active} Projects
            </h2>

            <p className="text-gray-400 mb-8">
              Practice and demo projects will be added here.
            </p>

            <button
              onClick={() => setActive(null)}
              className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              ← Back to categories
            </button>
          </motion.div>
        )}

        {/* REACT PROJECTS */}
        {active === "react" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">
                React <span className="text-cyan-400">Projects</span>
              </h2>

              <button
                onClick={() => setActive(null)}
                className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                ← Back
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reactProjects.map((p) => (
                <div
                  key={p.name}
                  className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition card-hover"
                >
                  <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-gray-400 mb-4">{p.desc}</p>

                  <div className="flex gap-4">
                    <a
                      href={p.live}
                      target="_blank"
                      className="text-cyan-400 hover:underline"
                    >
                      Live Demo →
                    </a>

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        className="text-gray-300 hover:text-cyan-400"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* NODE PROJECTS */}
        {active === "node" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">
                Node / <span className="text-cyan-400">MERN Projects</span>
              </h2>

              <button
                onClick={() => setActive(null)}
                className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                ← Back
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {nodeProjects.map((p) => (
                <div
                  key={p.name}
                  className="bg-black/40 border border-white/10 rounded-2xl p-6 card-hover"
                >
                  <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-gray-400 mb-4">{p.desc}</p>

                  <div className="flex gap-4">
                    <a
                      href={p.live}
                      target="_blank"
                      className="text-cyan-400 hover:underline"
                    >
                      Live Demo →
                    </a>

                    <a
                      href={p.github}
                      target="_blank"
                      className="text-gray-300 hover:text-cyan-400"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

function TechCard({ title, onClick, highlight }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-10 border transition text-center
        ${
          highlight
            ? "border-cyan-400 bg-cyan-400/10"
            : "border-white/10 bg-black/40 hover:border-cyan-400"
        }
      `}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">Click to view projects</p>
    </motion.div>
  );
}