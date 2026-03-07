import { useState, useEffect, useCallback } from "react";
import {
  LayoutDashboard,
  LogOut,
  Trash2,
  Layers,
  Inbox,
  Edit2,
  Upload,
  CheckCircle2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import API from "../api"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("projects"); 
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const token = localStorage.getItem("token");

  const [project, setProject] = useState({
    title: "",
    description: "",
    category: "Web",
    technologies: "",
    github: "",
    link: "",
    imageFile: null,
  });

  // --- DATA FETCHING ---
  const fetchData = useCallback(async () => {
    try {
      const pRes = await API.get("/projects");
      setProjects(pRes.data);

      const mRes = await API.get("/messages", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(mRes.data);
    } catch (err) {
      console.error("Fetch error:", err);
      if (err.response?.status === 401) navigate("/admin/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (!token) navigate("/admin/login");
    else fetchData();
  }, [navigate, fetchData, token]);

  // --- PROJECT ACTIONS ---
  const handleEditClick = (proj) => {
    setIsEditing(proj._id);
    setProject({
      title: proj.title,
      description: proj.description,
      category: proj.category,
      technologies: proj.technologies.join(", "),
      github: proj.github || "",
      link: proj.link || "",
      imageFile: null,
    });
    setView("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setProject({
      title: "",
      description: "",
      category: "Web",
      technologies: "",
      github: "",
      link: "",
      imageFile: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    Object.keys(project).forEach((key) => {
      if (key === "imageFile") {
        if (project.imageFile) formData.append("image", project.imageFile);
      } else {
        formData.append(key, project[key]);
      }
    });

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      if (isEditing) {
        await API.put(`/projects/${isEditing}`, formData, config);
      } else {
        await API.post("/projects", formData, config);
      }

      setStatus(
        isEditing ? "Updated Successfully!" : "Published Successfully!",
      );
      cancelEdit();
      fetchData();
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      setStatus("Action failed: " + (err.response?.data?.message || "Error"));
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete project?")) return;
    try {
      await API.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // --- MESSAGE ACTIONS ---
  const deleteMessage = async (id) => {
    if (!window.confirm("Delete message?")) return;
    try {
      await API.delete(`/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      {/* SIDEBAR */}
      <div className="w-72 bg-white dark:bg-slate-900 border-r p-8 fixed h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-10">
            <LayoutDashboard /> Admin
          </h2>
          <nav className="space-y-2">
            <button
              onClick={() => setView("projects")}
              className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${view === "projects" ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-bold" : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
            >
              <Layers size={20} /> Projects
            </button>
            <button
              onClick={() => setView("messages")}
              className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${view === "messages" ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-bold" : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
            >
              <Inbox size={20} /> Inbox{" "}
              <span className="ml-auto text-xs bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded-full">
                {messages.length}
              </span>
            </button>
          </nav>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin/login");
          }}
          className="p-4 text-slate-400 hover:text-red-500 flex items-center gap-3 transition-colors"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="ml-72 p-12 w-full">
        <AnimatePresence mode="wait">
          {view === "projects" ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 xl:grid-cols-2 gap-12"
            >
              {/* Project Form */}
              <section>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold dark:text-white">
                      {isEditing ? "Update Project" : "New Project"}
                    </h3>
                    {isEditing && (
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="text-red-500 text-xs font-bold flex items-center gap-1 hover:underline"
                      >
                        <X size={14} /> CANCEL
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      placeholder="Title"
                      value={project.title}
                      onChange={(e) =>
                        setProject({ ...project, title: e.target.value })
                      }
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      value={project.category}
                      onChange={(e) =>
                        setProject({ ...project, category: e.target.value })
                      }
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white outline-none"
                    >
                      <option value="Web">Web</option>
                      <option value="Mobile">Mobile</option>
                    </select>
                  </div>

                  <textarea
                    required
                    placeholder="Description"
                    rows="3"
                    value={project.description}
                    onChange={(e) =>
                      setProject({ ...project, description: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    placeholder="Technologies (e.g. React, Node.js)"
                    value={project.technologies}
                    onChange={(e) =>
                      setProject({ ...project, technologies: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white outline-none"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="GitHub URL"
                      value={project.github}
                      onChange={(e) =>
                        setProject({ ...project, github: e.target.value })
                      }
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white outline-none"
                    />
                    <input
                      placeholder="Live Link"
                      value={project.link}
                      onChange={(e) =>
                        setProject({ ...project, link: e.target.value })
                      }
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white outline-none"
                    />
                  </div>

                  <div className="relative border-2 border-dashed p-6 rounded-2xl text-center border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors">
                    <Upload className="mx-auto mb-2 text-slate-400" />
                    <span className="text-sm text-slate-500 block">
                      {project.imageFile
                        ? project.imageFile.name
                        : "Click to upload project screenshot"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setProject({ ...project, imageFile: e.target.files[0] })
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>

                  <button
                    disabled={loading}
                    className={`w-full py-4 text-white font-bold rounded-2xl transition-all shadow-lg ${loading ? "bg-slate-400" : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"}`}
                  >
                    {loading
                      ? "Processing..."
                      : isEditing
                        ? "Update Project"
                        : "Publish Project"}
                  </button>

                  {status && (
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 text-emerald-600 text-sm font-bold text-center flex items-center justify-center gap-2">
                      <CheckCircle2 size={16} /> {status}
                    </div>
                  )}
                </form>
              </section>

              {/* Project List */}
              <section>
                <h3 className="text-xl font-bold dark:text-white mb-6">
                  Live Projects ({projects.length})
                </h3>
                <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                  {projects.map((p) => (
                    <div
                      key={p._id}
                      className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={p.image}
                          className="w-14 h-14 rounded-xl object-cover bg-slate-100"
                          alt=""
                        />
                        <div>
                          <h4 className="font-bold dark:text-white text-lg leading-tight">
                            {p.title}
                          </h4>
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                            {p.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditClick(p)}
                          className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteProject(p._id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            /* MESSAGE INBOX VIEW */
            <motion.div
              key="messages"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl"
            >
              <h1 className="text-2xl font-bold mb-8 dark:text-white flex items-center gap-3">
                <Inbox /> Messages Inbox
              </h1>
              <div className="space-y-4">
                {messages.map((m) => (
                  <div
                    key={m._id}
                    className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl uppercase">
                          {m.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold dark:text-white text-lg">
                            {m.name}
                          </h4>
                          <p className="text-sm text-slate-500">
                            {m.email} • {new Date(m.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteMessage(m._id)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
                      <p className="text-xs font-bold text-blue-500 uppercase mb-2">
                        Subject: {m.subject}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {m.message}
                      </p>
                    </div>
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400">
                    No messages in your inbox yet.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
