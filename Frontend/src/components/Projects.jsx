import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import API from '../api'; 
import { Github, ExternalLink, Download } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Uses the dynamic baseURL from your api.js
        const res = await API.get('/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="text-4xl font-bold dark:text-white">Recent Work</h2>
          
          {/* Category Filter */}
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
            {['All', 'Web', 'Mobile'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filtered.map((project) => (
                <motion.div 
                  layout 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  key={project._id}
                  className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
                          <Github className="text-slate-900" size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                          {project.category === 'Mobile' ? <Download size={20} /> : <ExternalLink size={20} />}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-md uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        
        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <p className="text-center text-slate-500 py-10">No projects found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;