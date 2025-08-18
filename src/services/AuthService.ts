import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data; // Sempre retorna o objeto { message, token, client }
};

export const forgotPassword = (email: string) => {

  return axios.post(`${API_URL}/forgotpassword`, {email});

}

export const resetPassword = (token:string, newPassword: string) => {

  return axios.post(`${API_URL}/resetpassword/${token}`, {token, newPassword});

}
