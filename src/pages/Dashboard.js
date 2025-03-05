import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TextEditor from "../components/TextEditor";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); 
  const id = localStorage.getItem("id"); 
    if (!token) {
      navigate("/");
    } else {
      try {
        setUserId(id); 
      } catch (error) {
        console.error("Invalid token:", error);
        navigate("/");
      }

    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      {userId && <TextEditor userId={userId} />}
    </>
  );
};

export default Dashboard;