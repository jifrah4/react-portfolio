import React, { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const ADMIN_EMAIL = "jesseifrah08@gmail.com"; // use same as Firebase admin user

const AdminMessages = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingUser(false);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("https://react-portfolio-qoaa.onrender.com/api/contact/messages",);
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (user && user.email === ADMIN_EMAIL) {
      fetchMessages();
    }
  }, [user]);

  if (loadingUser) {
    return (
      <div className="page-container">
        <p>Checking admin access...</p>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="page-container">
        <h1>Admin Messages</h1>
        <p>You must be signed in to view messages.</p>
        <p>Go to the Sign In page and log in with your admin email.</p>
      </div>
    );
  }

  // Logged in but not admin
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div className="page-container">
        <h1>Admin Messages</h1>
        <p>Access denied. This page is only for the admin.</p>
      </div>
    );
  }

  // Logged in as admin
  return (
    <div className="page-container">
      <h1>Contact Messages (Admin)</h1>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Name</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Email</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Message</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{msg.name}</td>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{msg.email}</td>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{msg.message}</td>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminMessages;