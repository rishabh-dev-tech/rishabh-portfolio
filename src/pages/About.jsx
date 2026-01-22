import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 max-w-3xl leading-relaxed">
            I am a Full-Stack MERN Developer with hands-on experience building scalable,
            secure, and production-ready web applications using MongoDB, Express, React,
            and Node.js. I have completed a 6-month Full Stack internship and cloud
            training from IBM, and I’m passionate about problem-solving, clean code,
            and continuous learning.
          </p>

          {/* Resume Button */}
          <a
            href="/RISHABH-RESUME.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-7 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 card-hover"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-cyan-400">
              <FaGraduationCap /> Education
            </h2>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="font-semibold">B.Tech – Information Technology</p>
                <p className="text-sm text-gray-400">SRMCEM, Lucknow • 2025 • CGPA 6.0</p>
              </div>

              <div>
                <p className="font-semibold">Diploma – Information Technology</p>
                <p className="text-sm text-gray-400">
                  CSJM Govt Polytechnic, Ambedkar Nagar • 2022 • 71%
                </p>
              </div>

              <div>
                <p className="font-semibold">Class XII (PCM)</p>
                <p className="text-sm text-gray-400">
                  St. Thomas Inter College, Shahganj • 2019 • 63%
                </p>
              </div>
            </div>
          </motion.div>

          {/* INTERNSHIP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 card-hover"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-cyan-400">
              <FaBriefcase /> Training & Internship
            </h2>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="font-semibold">
                  Full Stack Intern – Hanumant Technology Pvt. Ltd.
                </p>
                <p className="text-sm text-gray-400">
                  6-month MERN internship • Real-world projects • APIs • Auth • Databases
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Summer Training – Techpile Technology Pvt. Ltd.
                </p>
                <p className="text-sm text-gray-400">
                  45 days training in Python with Django
                </p>
              </div>

              <div>
                <p className="font-semibold">Cloud Computing Training – IBM</p>
                <p className="text-sm text-gray-400">
                  Campus training program
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ACHIEVEMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 border border-white/10 rounded-2xl p-6 card-hover"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-cyan-400">
            <FaTrophy /> Achievements & Activities
          </h2>

          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>Best Project Award during Internship</li>
            <li>IdeaThorn Winner 2025</li>
            <li>Coordinator – College Event, SRMCEM Lucknow</li>
            <li>Interest in Badminton</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}