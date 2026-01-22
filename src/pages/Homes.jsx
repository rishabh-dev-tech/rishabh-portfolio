import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Homes() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-cyan-400">Rishabh Srivastav</span>
          </h1>

          <h2 className="mt-3 text-xl md:text-2xl text-gray-400">
            Full-Stack Developer
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl leading-relaxed">
            I build scalable, secure, and high-performance web applications
            using modern technologies. Passionate about clean code, real-world
            problem solving, and continuous learning.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/about"
              className="px-7 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              About Me
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="mt-8 flex gap-5 text-2xl text-gray-400">
            <a
              href="https://github.com/rishabh-dev-tech"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-srivastav-a5126021b"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center">

            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 blur-3xl opacity-30 animate-pulse"></div>

            {/* rotating ring */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-spin-slow"></div>

            {/* image */}
            <img
              src="/profile.png"
              alt="Rishabh"
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-black"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}