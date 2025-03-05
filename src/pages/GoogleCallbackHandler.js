import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleCallbackHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get("accessToken");
    const refreshToken = queryParams.get("refreshToken");
    const id = queryParams.get("id");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
        if (id) {
            localStorage.setItem("id", id);
        }

      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallbackHandler;