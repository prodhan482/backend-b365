import axios from "axios";
import { GENERALSETTINGS_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  
export async function getItems() {
  const response = await axios.get(`${GENERALSETTINGS_API}/socialLinks`);
  return response.data;
}
export async function addItem(data) {
  const response = await axios.post(`${GENERALSETTINGS_API}/socialLinks`, data,{ headers });
  return response.data;
}

export async function editItem(id, data) {
  const response = await axios.patch(`${GENERALSETTINGS_API}/socialLinks/${id}`, data,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${GENERALSETTINGS_API}/socialLinks/${id}`,{ headers });
  return response.data;
}
