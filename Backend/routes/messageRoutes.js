import express from "express";
import Message from "../models/Message.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC: Send a message from the portfolio
router.post("/", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message Sent to Emmanuel Successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PRIVATE: Get all messages for Dashboard
router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PRIVATE: Delete a message
router.delete("/:id", auth, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;