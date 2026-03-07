import { motion } from 'framer-motion';
// 1. IMPORT YOUR PHOTO (Ensure this path and filename are correct!)
import profileImg from '../assets/Emmanuel Adikwu new profile pics.jpg';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: PROFESSIONAL PORTRAIT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative group flex justify-center"
        >
          {/* 1. The main frame - Clean, defined shadow, rounded corners */}
          <div className="relative aspect-[3/4] w-[90%] md:w-full max-w-sm rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-2">
            
            {/* 2. The inner container - Sharp image border */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <img 
                src={profileImg} 
                alt="Emmanuel Adikwu - Full-Stack Developer" 
                // 3. Removed 'mix-blend' and 'opacity'. Set object-cover for perfect fill.
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* 4. A professional accent: Textura element on the dark border */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full">
            About Me
          </div>
          <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white leading-tight tracking-tight">
            Driving Results Through <span className="text-blue-600">Digital Innovation</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
            I am a full-stack developer with a passion for building clean, scalable applications. 
            My background in Digital Marketing allows me to build products that aren't just 
            technically sound, but also optimized for growth and user conversion.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-slate-900 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-shadow hover:shadow-md">
                <div className="text-3xl font-bold text-blue-600 tracking-tight">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-medium tracking-wider mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;