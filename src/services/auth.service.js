import axios from "axios";

const API_URL = "/auth";

const admin = async (email, password) => {
  const response = await axios
    .post(API_URL + "/admin", {
      email,
      password,
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (email, password) => {
  const response = await axios
    .post(API_URL + "/login", {
      email,
      password,
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  admin,
  login,
  logout,
  getCurrentUser,
};

export default authService;
