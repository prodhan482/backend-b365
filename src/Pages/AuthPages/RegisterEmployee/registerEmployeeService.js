import axios from "axios"
import { EMPLOYEE_API } from "../../../Utils/Api"

export async function registerEmployee(data, token, image) {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', data.image);

    const response = await axios.post(`${EMPLOYEE_API}/register/`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return { ok: response.status === 200, status: response.status, data: response.data };
  } catch (error) {
    throw error;
  }
}

export async function getEmail(token) {
  const response = await axios.get(`${EMPLOYEE_API}/getEmailFromToken/${token}`);
  return response.data;
}