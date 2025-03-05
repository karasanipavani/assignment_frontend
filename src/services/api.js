import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const googleLogin = () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const saveLetter = async (userId, content) => {
  return axios.post(`${API_URL}/letters/save`, { userId, content });
};
