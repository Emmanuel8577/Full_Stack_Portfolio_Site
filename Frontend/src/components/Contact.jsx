import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import API from "../api"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/messages", formData);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: <Mail />,
                text: "emmanueledache54@gmail.com",
                label: "Email",
              },
              { icon: <Phone />, text: "+234 9137118577", label: "Phone" },
              { icon: <MapPin />, text: "Abuja, Nigeria", label: "Location" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase">
                    {item.label}
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl"
        >
          {sent && (
            <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center gap-2">
              <CheckCircle2 size={18} /> Message Sent, i will get back as soon as possible!
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-4 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-4 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
          <input
            required
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
          <textarea
            required
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
          <button
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
          >
            {loading ? "Sending..." : "Send Message"} <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
