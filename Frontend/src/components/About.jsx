import { motion } from 'framer-motion';
// Ensure this path and filename match your assets folder exactly
import profileImg from '../assets/Emmanuelprofilepics.jpg';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Core Technologies", value: "15+" },
  ];

  const techStack = [
    "Redis Caching", "Auth Systems", "Kafka", "Docker", 
    "Kubernetes", "React Native", "PostgreSQL", "MERN Stack"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: PROFESSIONAL PORTRAIT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative group flex justify-center"
        >
          {/* Main Photo Frame */}
          <div className="relative aspect-[3/4] w-[90%] md:w-full max-w-sm rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-2">
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <img 
                src={profileImg} 
                alt="Emmanuel Adikwu - Backend & Mobile Engineer" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full">
            Professional Profile
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white leading-tight tracking-tight">
            Engineering <span className="text-blue-600">Cross-Platform</span> Solutions
          </h2>

          <div className="space-y-4">
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I am a Software Developer specialized in high-performance backend architecture and scalable mobile applications. 
              My expertise spans the <strong>MERN stack</strong> and <strong>React Native</strong>, with a focus on 
              resilient systems powered by <strong>Redis, Kafka, and PostgreSQL</strong>.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              As a contract <strong>Mobile Developer at Alingo Technologies Ltd</strong>, I am currently leading the 
              development of a <strong>trilingual mobile application</strong>, ensuring seamless localization and 
              high-performance user experiences across diverse languages.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Previously, at <strong>Truemind Innovation Ltd</strong>, I served as the 
              <strong> Backend Auth Lead</strong> for the <strong>TalentFlow LMS</strong> platform. 
              I engineered secure authentication APIs and implemented <strong>Redis caching 
              mechanisms</strong> to slash latency and optimize session management.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I thrive in cross-functional environments, working alongside UI/UX designers and 
              marketers to ensure technical infrastructure—from <strong>Kubernetes orchestration</strong> to 
              <strong>CI/CD pipelines</strong>—drives actual business value.
            </p>
          </div>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="text-center p-4 bg-white dark:bg-slate-900 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900"
              >
                <div className="text-2xl font-bold text-blue-600 tracking-tight">{stat.value}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;