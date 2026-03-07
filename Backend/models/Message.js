import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: "unread" } // useful for dashboard filtering later
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);