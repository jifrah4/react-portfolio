// src/pages/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  // ✅ Use Render backend in production
  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://react-portfolio-qoaa.onrender.com"
      : "http://localhost:5001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsError(false);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/contacts`, {
  name,
  email,
  message,
});

      console.log(res.data);
      setStatus("Message sent successfully!");
      setIsError(false);

      // clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Please try again later.");
      setIsError(true);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && (
        <p className={`status ${isError ? "status-error" : "status-success"}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default Contact;
