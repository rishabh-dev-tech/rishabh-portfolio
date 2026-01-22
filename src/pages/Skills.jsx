import { motion } from "framer-motion";
import SkillGrid from "../components/SkillGrid";

export default function Skills() {
  return (
    <div className="min-h-screen px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xll font-extrabold mb-4"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mb-16"
        >
          A professional overview of my technical strengths and development stack.
        </motion.p>

        <SkillGrid />

      </div>
    </div>
  );
}