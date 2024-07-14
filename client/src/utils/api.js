import axios from "axios";
import { convertKeys, deleteToken, getToken } from ".";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const login = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await api.post(`/auth/login`, formData);
    return response.data;
  } catch (error) {
    return error.response?.data || "Registration failed";
  }
};

export const register = async (username, meterNumber, email, password) => {
  try {
    const formData = new FormData();
    formData.append("name", username);
    formData.append("meter_number", meterNumber);
    formData.append("email", email);
    formData.append("password", password);

    const response = await api.post(`/auth/register`, formData);
    return response.data;
  } catch (error) {
    return error.response?.data || "Registration failed";
  }
};

export const fetchUserData = async () => {
  try {
    const response = await api.get("dashboard/me", {
      headers: {
        Authorization: `${getToken()}`,
      },
    });
    return convertKeys(response.data);
  } catch (error) {
    deleteToken();
    console.error("Error fetching user data: ", error);
  }
};
