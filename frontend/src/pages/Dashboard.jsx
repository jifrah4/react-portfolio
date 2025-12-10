import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        setUserData(docSnap.data());
      }
    });
  }, []);

  if (!userData) return <p>Loading user info...</p>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userData.name} 👋</h1>

      <div className="dashboard-info">
        <p><span>Email:</span> {userData.email}</p>
        <p><span>Email Verified:</span> {userData.emailVerified ? "Yes" : "No"}</p>
        <p>
          <span>Account Created:</span>{" "}
          {userData.createdAt?.toDate().toLocaleString()}
        </p>
      </div>

      <div className="dashboard-divider"></div>
    </div>
  );
};

export default Dashboard;

