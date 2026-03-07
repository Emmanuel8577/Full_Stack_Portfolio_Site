import express from "express";
import mongoose from "mongoose";
import Project from "../models/Project.js";
import auth from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE (POST)
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload an image" });
    }

    const projectData = {
      ...req.body,
      image: req.file.path, // Cloudinary URL
      technologies: req.body.technologies ? req.body.technologies.split(",").map(t => t.trim()) : []
    };

    const newProject = new Project(projectData);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE (PUT)
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    // Prepare update object from text fields
    const updateData = { ...req.body };

    // Handle Technologies array
    if (req.body.technologies) {
      updateData.technologies = req.body.technologies.split(",").map(t => t.trim());
    }

    // IMPORTANT: Only update image if a NEW file was provided
    if (req.file) {
      updateData.image = req.file.path;
    } else {
      // If no new file, remove 'image' from updateData so Mongoose doesn't overwrite it with null
      delete updateData.image;
    }

    const updated = await Project.findByIdAndUpdate(
      id, 
      { $set: updateData }, 
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Project not found" });
    
    console.log("✅ Project Updated Successfully:", updated.title);
    res.json(updated);
  } catch (err) {
    console.error("❌ UPDATE ROUTE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;