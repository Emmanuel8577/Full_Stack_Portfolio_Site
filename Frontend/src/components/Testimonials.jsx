import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Working with this developer was a game-changer for our SaaS platform. The attention to detail in both the frontend and backend was exceptional.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The digital marketing strategy provided alongside the web development helped us double our conversion rate in just three months.",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Elena Rodriguez",
    role: "Startup Founder",
    content: "Fast, reliable, and incredibly talented. Our mobile app launched without a hitch and the user feedback has been phenomenal.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Client <span className="text-blue-600">Feedback</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Don't just take my word for it—here's what my partners have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Quote Icon Decoration */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 italic mb-8 relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-none">{item.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;