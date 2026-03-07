import { motion } from 'framer-motion';
import { Code, Smartphone, BarChart3, Globe, Zap, Heart } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, responsive websites using the MERN stack and Next.js.",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    features: ["React & Tailwind", "Node.js Backends", "SEO Optimization"]
  },
  {
    title: "Mobile Solutions",
    description: "Creating seamless cross-platform mobile applications with React Native and Expo.",
    icon: <Smartphone className="w-10 h-10 text-cyan-500" />,
    features: ["iOS & Android", "App Store Deployment", "Offline Support"]
  },
  {
    title: "Digital Marketing",
    description: "Strategic growth through data-driven marketing, social media management, and brand scaling.",
    icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
    features: ["Content Strategy", "Ads Management", "Analytics & Reporting"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            My <span className="text-blue-600">Specializations</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I combine technical expertise with creative strategy to deliver digital products that actually perform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="mb-6 p-3 inline-block bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Zap size={14} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;