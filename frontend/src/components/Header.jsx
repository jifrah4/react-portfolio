import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Detect user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // redirect to home
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2>Jesse Ifrah</h2>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        {/* Logged OUT View */}
        {!user && (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        )}

        {/* Logged IN View */}
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
            <Link to="/admin/messages">Admin Messages</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
