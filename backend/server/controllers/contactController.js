import ContactMessage from "../models/contactModel.js";

export const submitContact = async (req, res) => {
  console.log("🔥 Contact request received:", req.body);

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = new ContactMessage({
      name,
      email,
      message,
      createdAt: new Date()
    });

    await newMessage.save();
    console.log("📩 Message saved to MongoDB!");

    res.status(201).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error saving contact message:", error);
    res.status(500).json({ error: "Server error" });
  }
};
