import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screenpx-5 sm:px-8 py-20 sm:py-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 max-w-2xl">
            I’m open to full-time roles, internships, and freelance opportunities also for Job.
            Feel free to connect with me through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
          >
            <FaPhoneAlt className="text-cyan-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-400 text-sm">+91 73093-35476</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
          >
            <FaEnvelope className="text-cyan-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-400 text-sm break-all">
              rishabh8090496023@gmail.com
            </p>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
          >
            <FaGithub className="text-cyan-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-1">GitHub</h3>
            <a
              href="https://github.com/rishabh-dev-tech"
              target="_blank"
              className="text-gray-400 text-sm hover:text-cyan-400"
            >
              github.com/rishabh-dev-tech
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition card-hover"
          >
            <FaLinkedin className="text-cyan-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/rishabh-srivastav-a5126021b"
              target="_blank"
              className="text-gray-400 text-sm hover:text-cyan-400 break-all"
            >
              linkedin.com/in/rishabh-srivastav-a5126021b
            </a>
          </motion.div>

        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 mt-16"
        >
          © {new Date().getFullYear()} Rishabh Srivastav — Full-Stack MERN Developer
        </motion.p>

      </div>
    </div>
  );
}