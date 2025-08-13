import axios from "axios"

const API_URL = "http://localhost:3000/api/appointments";

// Tipo do agendamento (ajuste conforme o seu backend)
export interface Appointment {
  id?: number;
  clientId: number;
  date: string; // formato ISO ex: "2025-08-12T13:30:00"
  service: string;
}

export const getAllAppointments = async (token: string) => {

  const response = await axios.get(`${API_URL}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;

}

export const createAppointment = async (appointment: Appointment, token: string) => {
  const response = await axios.post(`${API_URL}/`, appointment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAppointmentsByDate = async (date: string, token: string) => {
  const response = await axios.get(`${API_URL}/date`, {
    params: { date },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAppointmentsByClient = async (clientId: number, token: string) => {
  const response = await axios.get(`${API_URL}/client/${clientId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateAppointmentById = async (appointmentId: number, appointment: Appointment, token: string) => {
  const response = await axios.put(`${API_URL}/${appointmentId}`, appointment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteAppointmentById = async (id: number, token: string) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const checkAvailability = async (date: string, token: string) => {
  const response = await axios.post(
    `${API_URL}/checkavailability`,
    { date },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
