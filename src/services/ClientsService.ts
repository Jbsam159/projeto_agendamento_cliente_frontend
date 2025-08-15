import axios from "axios";

const API_URL = "http://localhost:3000/api/clients";

export const getAllClients = async (token: string) => {

  const response = await axios.get(`${API_URL}/allclients`, {

    headers: { Authorization: `Bearer ${token}` }

  });

  return response.data;

};

export const getClientById = async (id: number, token: string) => {
  const response = await axios.get(`${API_URL}/client/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const updateClient = async (id: number, clientData: any, token: string) => {
  const response = await axios.put(`${API_URL}/update/${id}`,
    clientData,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
