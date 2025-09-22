const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Types.ObjectId, ref: "User", required: true, index: true },
  receiver: { type: mongoose.Types.ObjectId, ref: "User", required: true, index: true },
  text: { type: String, required: true },
  isRead: { type: Boolean, default: false, enum: ["read", "unread"] },
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
