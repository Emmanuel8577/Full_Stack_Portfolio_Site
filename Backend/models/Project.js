import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // Changed: Removed the strict enum temporarily to ensure "Mobile" isn't being rejected
  category: { type: String, default: "Web" }, 
  technologies: [String],
  image: { type: String, required: true }, 
  github: { type: String },
  link: { type: String }, 
}, { timestamps: true });

// Check if model already exists to prevent rebuild errors in dev
export default mongoose.models.Project || mongoose.model("Project", projectSchema);