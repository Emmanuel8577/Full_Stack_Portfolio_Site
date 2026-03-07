import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { motion } from "framer-motion";
import { Lock, User, LogIn } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Use the API utility for the post request
      const res = await API.post("/auth/login", formData);

      // Save the token
      localStorage.setItem("token", res.data.token);

      // Success! Redirect to dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      // Handle errors gracefully
      setError(
        err.response?.data?.message || "Invalid credentials. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800"
      >
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-blue-600 rounded-2xl mb-4 text-white shadow-lg shadow-blue-500/20">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Admin Access
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Please enter your credentials
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center font-medium bg-red-50 dark:bg-red-900/10 py-2 rounded-lg"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg ${loading ? "bg-slate-400" : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"}`}
          >
            {loading ? "Checking..." : "Sign In"} <LogIn size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
