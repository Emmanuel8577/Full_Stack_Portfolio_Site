import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    icon: <Github />,
    url: "https://github.com/Emmanuel8577",
    color: "hover:text-gray-400",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/emmanuel-adikwu-24b062275/",
    color: "hover:text-blue-500",
  },
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/emmanuel.adikwu.965",
    color: "hover:text-blue-600",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/emmanuel_edache54/",
    color: "hover:text-pink-500",
  },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-slate-900 transition-colors duration-500">
      {/* 1. Animated Greeting */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-600 dark:text-blue-400 font-mono font-medium tracking-widest uppercase"
      >
        Welcome to my digital space
      </motion.span>

      {/* 2. Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white"
      >
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          Adikwu Emmanuel
        </span>
      </motion.h1>

      {/* 3. Subtitle / Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
      >
        A Full Stack Developer specializing in{" "}
        <span className="text-slate-900 dark:text-white font-semibold">
          Web
        </span>
        ,
        <span className="text-slate-900 dark:text-white font-semibold">
          {" "}
          Mobile
        </span>
        , and
        <span className="text-slate-900 dark:text-white font-semibold">
          {" "}
          Digital Marketing
        </span>
        . I build high-performance applications that bridge the gap between
        design and functionality.
      </motion.p>

      {/* 4. Social Links & Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-6"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-500 transition-all duration-300 transform hover:scale-125 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </motion.div>

      {/* 5. Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 flex gap-4"
      >
        <a href="#projects">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95">
            View Projects
          </button>
        </a>

        <a href="#contact">
          <button className="px-8 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
            Let's Talk
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
